import React from 'react';

import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { colors, sizes } from './theme';
import { Project, Task } from './Taskdata';

type Props = {
  projects: Project[];
  tasks: Task[];
  onSelectProject: (projectId: string) => void;
};

export default function Projects({ projects, tasks, onSelectProject }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>
        <Text style={styles.title}>Менің жобаларым</Text>
        <Text style={styles.subtitle}>Жобаны таңдап, тапсырмаларды көріңіз</Text>

        <FlatList
          data={projects}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            // Осы жобаға қатысты тапсырмалар санын есептейміз
            const projectTasks = tasks.filter((t) => t.projectId === item.id);
            const doneCount = projectTasks.filter((t) => t.status === 'done').length;

            return (
              <Pressable
                style={styles.card}
                onPress={() => onSelectProject(item.id)}
              >
                <Text style={styles.cardEmoji}>{item.emoji}</Text>

                <View style={styles.cardTextBlock}>
                  <Text style={styles.cardTitle}>{item.name}</Text>
                  <Text style={styles.cardSubtitle}>{item.description}</Text>

                  <View style={styles.progressRow}>
                    <View style={styles.progressBarBackground}>
                      <View
                        style={[
                          styles.progressBarFill,
                          {
                            width:
                              projectTasks.length > 0
                                ? `${(doneCount / projectTasks.length) * 100}%`
                                : '0%',
                          },
                        ]}
                      />
                    </View>
                    <Text style={styles.progressText}>
                      {doneCount}/{projectTasks.length}
                    </Text>
                  </View>
                </View>

                <Text style={styles.cardArrow}>→</Text>
              </Pressable>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 50,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: colors.text,
  },
  subtitle: {
    fontSize: 15,
    color: colors.subtitle,
    marginTop: 4,
    marginBottom: 24,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.inputBackground,
    borderRadius: sizes.borderRadius,
    padding: 16,
    marginBottom: 14,
  },
  cardEmoji: {
    fontSize: 30,
    marginRight: 14,
  },
  cardTextBlock: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.text,
  },
  cardSubtitle: {
    fontSize: 13,
    color: colors.subtitle,
    marginTop: 2,
    marginBottom: 10,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBarBackground: {
    flex: 1,
    height: 6,
    backgroundColor: '#E8E7EC',
    borderRadius: 3,
    marginRight: 8,
  },
  progressBarFill: {
    height: 6,
    backgroundColor: colors.purple,
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: colors.subtitle,
  },
  cardArrow: {
    fontSize: 18,
    color: colors.purple,
    marginLeft: 8,
  },
});