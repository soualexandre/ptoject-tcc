import React, { FC, useState } from 'react';
import { RefreshControl } from 'react-native';
import { CardHistoryFreight, EmptyHistoryFreight } from '~/components';
import { strings } from '~/locale';
import { FreightListBase, Separator } from './styles';

type Props = {
  freights: Freight[];
  refresh(): void;
};

const renderSeparator = (): JSX.Element => <Separator />;

const FreightList: FC<Props> = ({ freights, refresh }) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    refresh();
    setRefreshing(false);
  };
  return (
    <FreightListBase
      data={freights}
      keyExtractor={(item) => item.request_id.toString()}
      ItemSeparatorComponent={renderSeparator}
      renderItem={({ item: freight }) => (
        <CardHistoryFreight freight={freight} />
      )}
      ListEmptyComponent={() => (
        <EmptyHistoryFreight emptyFreight={strings('noData.emptyFeight')} />
      )}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

export default FreightList;
