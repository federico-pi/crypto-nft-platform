import React from 'react';
import { FlatList } from 'react-native';
import { BidderProfile } from '../../../types/profile';
import { THEME } from '../../../utils/theme';
import { Spacer } from '../../Spacer';
import { UserCard } from '../../UserCard';

export interface BidsTabProps {
  bidders: BidderProfile[];
}

export function BidsTab({ bidders }: BidsTabProps) {
  return (
    <FlatList
      scrollEnabled={false}
      keyExtractor={(_, index) => index.toString()}
      data={bidders}
      renderItem={({ item }) => (
        <UserCard
          image={item.pictureImageSource}
          title={item.fullName}
          text={`${item.amount} ${item.currency}`}
        />
      )}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <Spacer height={THEME.spacing.sm} />}
    />
  );
}
