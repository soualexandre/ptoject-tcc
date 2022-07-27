import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react';
import { ScrollView, View } from 'react-native';
import { If, MiniCardFilterProduct } from '~/components';
import CompaniesList from './CompaniesList';
import Product from './products';

import {
  FreightListBase,
  InfoProvider,
  ListBaseFilterProduct,
  Loading,
  Separator,
  TitleSection,
  Wrapper,
} from './styles';

type Props = {
  totalsDashboard: TotalDashboard;
  hasTotalsDashboard: boolean;
  loaded: boolean;
};
const renderSeparator = (): JSX.Element => <Separator />;

const Home: FC<Props> = ({ totalsDashboard, hasTotalsDashboard, loaded }) => (
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

export default observer(Home);
