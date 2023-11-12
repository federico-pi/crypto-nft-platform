import { format } from 'date-fns';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { THEME } from '../../../utils/theme';

export interface DetailsTabProps {
  tags: string[];
  listedAt: Date;
}

export function DetailsTab({ tags, listedAt }: DetailsTabProps) {
  return (
    <View style={styles.container}>
      {!!tags.length && (
        <Text style={styles.tags}>
          {tags.map((tag) => `#${tag.trim()}`).join(' ')}
        </Text>
      )}
      <Text style={styles.listedAt}>{`Post: ${format(
        listedAt,
        'dd.MM.yyyy'
      )}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.spacing.xs / 2,
  },
  tags: {
    color: THEME.colors.gray,
    fontSize: THEME.font_sizes.md,
    marginBottom: THEME.spacing.sm,
  },
  listedAt: {
    color: THEME.colors.black,
    fontSize: THEME.font_sizes.md + 1,
  },
});
