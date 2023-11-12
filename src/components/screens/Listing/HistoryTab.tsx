import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { THEME } from '../../../utils/theme';

export interface HistoryTabProps {
  history: unknown[];
}

export function HistoryTab({ history }: HistoryTabProps) {
  return (
    <View style={styles.container}>
      {!history.length && <Text style={styles.text}>{'No history yet'}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.spacing.xs / 2,
  },
  text: {
    color: THEME.colors.gray,
    fontSize: THEME.font_sizes.md,
  },
});
