import React, { FC, useState } from 'react';
import { RefreshControl } from 'react-native';
import { AnyObject } from 'yup/lib/types';
import { CardHistoryFreight, EmptyHistoryFreight } from '~/components';
import { strings } from '~/locale';
import { InfoProvider } from './styles';

type Props = {
  list: any;
};

// const renderSeparator = (): JSX.Element => <Separator />;

const CompaniesList: FC<Props> = ({ list }) => (
  <>
    <InfoProvider
      link={list.company_photo}
      title={list.company_name}
      value={list.company_city}
      star={list.stars}
      product={list.products}
      productList={list.productList}
    />
  </>
);

export default CompaniesList;
