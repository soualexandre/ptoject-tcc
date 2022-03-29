import React, { FC, useEffect, useState } from 'react';
import { ActivityIndicator, View, useWindowDimensions } from 'react-native';
import { If, NoFreight } from '~/components';
import { strings } from '~/locale';
import { SceneMap, TabView, isEmpty } from '~/modules';
import { INDEX_TAB } from '~/utils';
import FreightList from './FreightList';
import { Loading, TabBarView, Wrapper } from './styles';

type Props = {
  freightsFinished: Freight[];
  freightsInProgress: Freight[];
  handleNavigateFilter(): void;
  hasFreight: boolean;
  refreshFreight(): void;
  loaded: boolean;
};

const FreightHistory: FC<Props> = ({
  freightsInProgress,
  freightsFinished,
  handleNavigateFilter,
  hasFreight,
  refreshFreight,
  loaded,
}) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: strings('history.inProgress') },
    { key: 'second', title: strings('history.finished') },
  ]);
  const { width } = useWindowDimensions();

  const onChangeIndexTab = () => {
    if (!isEmpty(freightsFinished)) {
      setIndex(INDEX_TAB.SECOND);
    }
    if (!isEmpty(freightsInProgress)) {
      setIndex(INDEX_TAB.FIRST);
    }
  };
  useEffect(() => {
    onChangeIndexTab();
  }, [freightsFinished, freightsInProgress]);

  const FreightsInProgress = (): JSX.Element => (
    <FreightList freights={freightsInProgress} refresh={refreshFreight} />
  );

  const FreightsFinished = (): JSX.Element => (
    <FreightList freights={freightsFinished} refresh={refreshFreight} />
  );

  const renderScene = SceneMap({
    first: FreightsInProgress,
    second: FreightsFinished,
  });

  return (
    <>
      <Wrapper
        isMainHeader
        isFixed
        title={strings('history.title')}
        fullWidth
        horizontal
        hasScroll={false}
        onPressFilter={handleNavigateFilter}
        showFilter
      >
        <If condition={loaded}>
          <If condition={hasFreight}>
            <TabView
              navigationState={{ index, routes }}
              renderScene={renderScene}
              onIndexChange={setIndex}
              renderTabBar={(props) => <TabBarView {...props} />}
              initialLayout={{ width }}
            />
          </If>
          <If condition={!hasFreight}>
            <NoFreight />
          </If>
        </If>
        <If condition={!loaded}>
          <Loading size="large" />
        </If>
      </Wrapper>
    </>
  );
};

export default FreightHistory;
