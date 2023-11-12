import React, { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Listing, ListingTab } from '../../../types/listing';
import { THEME } from '../../../utils/theme';
import { BidsTab } from './BidsTab';
import { DetailsTab } from './DetailsTab';
import { HistoryTab } from './HistoryTab';
import { OwnersTab } from './OwnersTab';

export interface ListingTabsProps {
  listing: Listing;
}

export function ListingTabs({ listing }: ListingTabsProps) {
  const tabs: { [key in ListingTab]: JSX.Element } = useMemo(
    () => ({
      [ListingTab.OWNERS]: <OwnersTab owners={listing.owners} />,
      [ListingTab.BIDS]: <BidsTab bidders={listing.bidders} />,
      [ListingTab.DETAILS]: (
        <DetailsTab listedAt={listing.listedAt} tags={listing.tags} />
      ),
      [ListingTab.HISTORY]: <HistoryTab history={listing.history} />,
    }),
    [listing.key]
  );

  const [activeTab, setActiveTab] = useState(ListingTab.OWNERS);

  return (
    <>
      <View style={styles.container}>
        {Object.values(ListingTab).map((tab, index) => {
          return (
            <Pressable
              key={`${tab}-${index}`}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={styles.text}>{tab}</Text>
            </Pressable>
          );
        })}
      </View>
      <View style={styles.tabsContainer}>{tabs[activeTab]}</View>
    </>
  );
}

export const TAB_HEIGHT = 55;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: TAB_HEIGHT,
    borderRadius: TAB_HEIGHT / 2,
    backgroundColor: THEME.colors.gray_light,
    paddingHorizontal: THEME.spacing.lg / 2,
  },
  text: {
    padding: THEME.spacing.lg / 2,
    fontSize: THEME.font_sizes.md + 1,
    fontWeight: THEME.font_weights.semi_bold,
  },
  tabsContainer: {
    flex: 1,
    paddingTop: THEME.spacing.xl,
  },
});
