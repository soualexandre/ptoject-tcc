import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';
import { CartProductList } from '~/components';
import { observer } from '~/modules';
import { NavigationActions, Routes, useRoute } from '~/navigation';
import {
  BannerCompany,
  ButtonAgend,
  Conatiner,
  FreightListBase,
  InfoProvider,
  LabelAgend,
  SectionTitle,
  Title,
  Wrapper,
} from './styles';

export const CompanyDetail: React.FC = () => {
  const { params } = useRoute<FreightDetailsParams>();
  const { company } = params;
  const { products } = company;

  const onPressDetails = () => {
    NavigationActions.navigate(Routes.SHOW_CART_ITEMS, {});
  };
  return (
    <Wrapper isMainSimpleHeader fullWidth showSearchInput isFixed showAvatar>
      <ScrollView>
        <Conatiner>
          <BannerCompany source={{ uri: company.company_photo }} />
          <Title>{company.company_name}</Title>
        </Conatiner>
        <SectionTitle>Produtos</SectionTitle>
        <FreightListBase
          data={products}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item: products }) => (
            <CartProductList products={products} />
          )}
        />
        <ButtonAgend onPress={onPressDetails}>
          <LabelAgend>Agendar</LabelAgend>
        </ButtonAgend>
      </ScrollView>
    </Wrapper>
  );
};

export default observer(CompanyDetail);
