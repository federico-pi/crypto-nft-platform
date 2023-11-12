import { FlatList } from 'react-native';
import { OwnerProfile } from '../../../types/profile';
import { THEME } from '../../../utils/theme';
import { Spacer } from '../../Spacer';
import { UserCard } from '../../UserCard';

export interface OwnersTabProps {
  owners: OwnerProfile[];
}

export function OwnersTab({ owners }: OwnersTabProps) {
  return (
    <FlatList
      scrollEnabled={false}
      keyExtractor={(_, index) => index.toString()}
      data={owners}
      renderItem={({ item }) => (
        <UserCard
          image={item.pictureImageSource}
          title={item.fullName}
          subTitle={`${item.editions} editions`}
        />
      )}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <Spacer height={THEME.spacing.sm} />}
    />
  );
}
