import React, { useCallback, useState } from 'react';
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { LayoutChangeEvent } from 'react-native';
import { FavouriteButton } from '../components/FavouriteButton';
import { InfoBox } from '../components/InfoBox';
import { Listing } from '../types/listing';
import { NavigationProps } from '../types/navigation';
import { THEME } from '../utils/theme';

export interface ItemCardProps {
  listing: Listing;
}

export function ListingCard({ listing }: ItemCardProps) {
  const navigation = useNavigation<NavigationProps>();

  const [imageDimension, setImageDimension] = useState<{
    height: number;
    width: number;
  }>();

  const mainOwner = listing.owners[0];
  const highestBid = listing.bidders[0];

  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      setImageDimension({
        height: event.nativeEvent.layout.height,
        width: event.nativeEvent.layout.width,
      });
    },
    [imageDimension]
  );

  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate('Listing', { listingKey: listing.key })
      }
    >
      <View onLayout={onLayout} style={styles.container}>
        <FavouriteButton
          iconSize={32}
          display={{ containerStyle: styles.favouriteButtonWrapper }}
        />
        <Image
          style={[styles.sharedImage, imageDimension]}
          source={listing.imageSource}
          resizeMode="cover"
        />
        <InfoBox
          title={listing.name}
          description={`${highestBid.amount} ${highestBid.currency}`}
          image={mainOwner.pictureImageSource}
          imageLabel={mainOwner.fullName}
          subText="Current bid"
          display={{ containerStyle: styles.infoBoxContainer }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  favouriteButtonWrapper: {
    position: 'absolute',
    top: THEME.spacing.lg,
    right: THEME.spacing.lg,
  },
  sharedImage: {
    borderRadius: THEME.radius.xl,
  },
  infoBoxContainer: {
    position: 'absolute',
    bottom: THEME.spacing.lg,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: 30,
    padding: THEME.spacing.lg,
    gap: THEME.spacing.xs / 2,
    overflow: 'hidden',
    zIndex: 1,
  },
});
