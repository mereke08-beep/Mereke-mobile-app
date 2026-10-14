import React, { useState } from 'react';

import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { colors, sizes } from './theme';
import { Project, Task, TaskStatus } from './Taskdata';

type Props = {
  project: Project;
  tasks: Task[]; // тек осы жобаға қатысты тапсырмалар
  onBack: () => void;
  onSelectTask: (taskId: string) => void;
};

// Статус мәнін қазақша атауға және түске айналдыру
const statusInfo: Record<TaskStatus, { label: string; color: string }> = {
  todo: { label: 'Жоспарда', color: '#A3A2AB' },
  in_progress: { label: 'Орындалуда', color: '#E8A33D' },
  done: { label: 'Аяқталды', color: '#3DBE6C' },
};

export default function ProjectTasks({ project, tasks, onBack, onSelectTask }: Props) {
  // Қай сүзгі таңдалғанын сақтаймыз: барлығы немесе бір статус
  const [filter, setFilter] = useState<'all' | TaskStatus>('all');

  const filteredTasks =
    filter === 'all' ? tasks : tasks.filter((t) => t.status === filter);

  const filters: { key: 'all' | TaskStatus; label: string }[] = [
    { key: 'all', label: 'Барлығы' },
    { key: 'todo', label: 'Жоспарда' },
    { key: 'in_progress', label: 'Орындалуда' },
    { key: 'done', label: 'Аяқталды' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>
        <Pressable style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>←</Text>
        </Pressable>

        <Text style={styles.title}>
          {project.emoji} {project.name}
        </Text>
        <Text style={styles.subtitle}>{project.description}</Text>

        {/* Статус бойынша сүзгі батырмалары */}
        <View style={styles.filterRow}>
          {filters.map((f) => (
            <Pressable
              key={f.key}
              style={[
                styles.filterChip,
                filter === f.key && styles.filterChipActive,
              ]}
              onPress={() => setFilter(f.key)}
            >
              <Text
                style={[
                  styles.filterChipText,
                  filter === f.key && styles.filterChipTextActive,
                ]}
              >
                {f.label}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Тапсырмалар тізімі */}
        <FlatList
          data={filteredTasks}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Pressable
              style={styles.taskCard}
              onPress={() => onSelectTask(item.id)}
            >
              <View style={styles.taskTextBlock}>
                <Text style={styles.taskTitle}>{item.title}</Text>
                <Text style={styles.taskMeta}>
                  {item.assignee} • {item.deadline}
                </Text>
              </View>

              <View
                style={[
                  styles.statusBadge,
                  { backgroundColor: statusInfo[item.status].color },
                ]}
              >
                <Text style={styles.statusBadgeText}>
                  {statusInfo[item.status].label}
                </Text>
              </View>
            </Pressable>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Бұл санатта тапсырма жоқ</Text>
          }
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
    paddingTop: 10,
  },
  backButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  backButtonText: {
    fontSize: 30,
    color: colors.text,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
  },
  subtitle: {
    fontSize: 14,
    color: colors.subtitle,
    marginTop: 3,
    marginBottom: 16,
  },
  filterRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  filterChip: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: colors.inputBackground,
    marginRight: 8,
    marginBottom: 8,
  },
  filterChipActive: {
    backgroundColor: colors.purple,
  },
  filterChipText: {
    fontSize: 13,
    color: colors.subtitle,
    fontWeight: '600',
  },
  filterChipTextActive: {
    color: colors.white,
  },
  taskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.inputBackground,
    borderRadius: sizes.borderRadius,
    padding: 14,
    marginBottom: 12,
  },
  taskTextBlock: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
  },
  taskMeta: {
    fontSize: 12,
    color: colors.subtitle,
    marginTop: 3,
  },
  statusBadge: {
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  statusBadgeText: {
    fontSize: 11,
    color: colors.white,
    fontWeight: '700',
  },
  emptyText: {
    textAlign: 'center',
    color: colors.subtitle,
    marginTop: 30,
    fontSize: 15,
  },
});