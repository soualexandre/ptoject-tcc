import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationActions, Routes } from '~/navigation';
import { InfoProvider } from './styles';

type Props = {
  list: any;
};

// const renderSeparator = (): JSX.Element => <Separator />;

const CompaniesList: FC<Props> = ({ list }) => {
  const onPressDetails = () => {
    NavigationActions.navigate(Routes.COMPANY_DETAIL, {
      id: list.id,
      company: list,
    });
  };
  return (
    <>
      <TouchableOpacity onPress={onPressDetails}>
        <InfoProvider
          link={list.company_photo}
          title={list.company_name}
          value={list.company_city}
          star={list.stars}
          product={list.products}
          productList={list.productList}
        />
      </TouchableOpacity>
    </>
  );
};

export default CompaniesList;
