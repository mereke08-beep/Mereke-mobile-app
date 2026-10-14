import React from 'react';

import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { colors, sizes } from './theme';
import { Task, TaskStatus } from './Taskdata';

type Props = {
  task: Task;
  onBack: () => void;
  onChangeStatus: (taskId: string, newStatus: TaskStatus) => void;
};

const statusInfo: Record<TaskStatus, { label: string; color: string }> = {
  todo: { label: 'Жоспарда', color: '#A3A2AB' },
  in_progress: { label: 'Орындалуда', color: '#E8A33D' },
  done: { label: 'Аяқталды', color: '#3DBE6C' },
};

export default function TaskDetails({ task, onBack, onChangeStatus }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>
        <Pressable style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>←</Text>
        </Pressable>

        <View
          style={[
            styles.statusBadge,
            { backgroundColor: statusInfo[task.status].color },
          ]}
        >
          <Text style={styles.statusBadgeText}>
            {statusInfo[task.status].label}
          </Text>
        </View>

        <Text style={styles.title}>{task.title}</Text>

        {/* Орындаушы мен мерзім ақпараты */}
        <View style={styles.infoRow}>
          <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>Орындаушы</Text>
            <Text style={styles.infoValue}>👤 {task.assignee}</Text>
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>Мерзімі</Text>
            <Text style={styles.infoValue}>📅 {task.deadline}</Text>
          </View>
        </View>

        <Text style={styles.descriptionTitle}>Сипаттама</Text>
        <Text style={styles.description}>{task.description}</Text>

        {/* Статусты өзгерту батырмалары */}
        <Text style={styles.descriptionTitle}>Статусты өзгерту</Text>
        <View style={styles.statusButtonsRow}>
          <Pressable
            style={[
              styles.statusButton,
              task.status === 'todo' && styles.statusButtonDisabled,
            ]}
            disabled={task.status === 'todo'}
            onPress={() => onChangeStatus(task.id, 'todo')}
          >
            <Text style={styles.statusButtonText}>Жоспарда</Text>
          </Pressable>

          <Pressable
            style={[
              styles.statusButton,
              task.status === 'in_progress' && styles.statusButtonDisabled,
            ]}
            disabled={task.status === 'in_progress'}
            onPress={() => onChangeStatus(task.id, 'in_progress')}
          >
            <Text style={styles.statusButtonText}>Орындалуда</Text>
          </Pressable>

          <Pressable
            style={[
              styles.statusButton,
              task.status === 'done' && styles.statusButtonDisabled,
            ]}
            disabled={task.status === 'done'}
            onPress={() => onChangeStatus(task.id, 'done')}
          >
            <Text style={styles.statusButtonText}>Аяқталды</Text>
          </Pressable>
        </View>
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
  statusBadge: {
    alignSelf: 'flex-start',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  statusBadgeText: {
    fontSize: 12,
    color: colors.white,
    fontWeight: '700',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 18,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  infoBlock: {
    flex: 1,
    backgroundColor: colors.inputBackground,
    borderRadius: sizes.borderRadius,
    padding: 14,
    marginRight: 10,
  },
  infoLabel: {
    fontSize: 12,
    color: colors.subtitle,
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 15,
    color: colors.text,
    fontWeight: '600',
  },
  descriptionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: colors.subtitle,
    lineHeight: 21,
    marginBottom: 24,
  },
  statusButtonsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  statusButton: {
    backgroundColor: colors.purple,
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginRight: 8,
    marginBottom: 8,
  },
  statusButtonDisabled: {
    backgroundColor: '#D8D7DF',
  },
  statusButtonText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '700',
  },
});