import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react';
import { ScrollView, View } from 'react-native';
import { If, MiniCardFilterProduct } from '~/components';
import { Routes } from '~/navigation';
import CompaniesList from './CompaniesList';
import StockData from './dados';
import Product from './products';

import {
  Center,
  DashBoard,
  FreightListBase,
  InfoProvider,
  ListBaseFilterProduct,
  Loading,
  Separator,
  TitleSection,
  Wrapper,
} from './styles';

type Props = {
  userName: string;
  totalsDashboard: TotalDashboard;
  hasTotalsDashboard: boolean;
  hasData?: boolean;
  handleNavigate(route: Routes): void;
  hasConcludedFreight: boolean;
  loaded: boolean;
};
const renderSeparator = (): JSX.Element => <Separator />;

const Home: FC<Props> = ({ totalsDashboard, hasTotalsDashboard, loaded }) => {
  console.log('totalsDashboard', totalsDashboard);
  return (
    <Wrapper isMainHeader fullWidth showSearchInput isFixed showAvatar>
      <ScrollView>
        <If condition={loaded}>
          <If condition={!hasTotalsDashboard}>
            <Loading size="large" />
          </If>
          <ListBaseFilterProduct
            data={Product}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={renderSeparator}
            renderItem={({ item: Product }) => (
              <MiniCardFilterProduct product={Product} />
            )}
          />
          <TitleSection> Produtores</TitleSection>
          <FreightListBase
            data={totalsDashboard}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={renderSeparator}
            renderItem={({ item: totalsDashboard }) => (
              <CompaniesList list={totalsDashboard} />
            )}
          />
        </If>
        <If condition={!loaded}>
          <Loading size="large" />
        </If>
      </ScrollView>
    </Wrapper>
  );
};

export default observer(Home);
