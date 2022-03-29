import React, { FC } from 'react';
import { strings } from '~/locale';
import { observer } from '~/modules';
import { NavigationActions, Routes } from '~/navigation';

import {
  Buttom,
  Column,
  ColumnDet,
  Heading,
  Row,
  Tag,
  Text,
  TextBold,
  TotalText,
  Wrapper,
} from './styles';

type Props = {
  freight: Freight;
};

const CardHistoryFreight: FC<Props> = ({ freight }: Props) => {
  const onPressDetails = () => {
    NavigationActions.navigate(Routes.FREIGHT_DETAIL, {
      id: freight.request_id,
    });
  };
  return (
    <Wrapper>
      <Row>
        <Column>
          <Heading>{strings('history.id')}</Heading>
          <Text>{freight.request_id}</Text>
        </Column>
        <Tag status={freight.status_id} label={freight.status_label} />
      </Row>
      <Row>
        <Column>
          <Heading>{strings('history.CollectAddress')}</Heading>
          <TextBold>{freight.collect_address}</TextBold>
        </Column>
      </Row>
      <Row>
        <Column>
          <Heading>{strings('history.DestAddress')}</Heading>
          <TextBold>{freight.dest_address}</TextBold>
        </Column>
      </Row>
      <Row>
        <Column flex={2}>
          <Heading>{strings('history.dateHour')}</Heading>
          <Text>{freight.date}</Text>
        </Column>
        <ColumnDet>
          <Heading>{strings('history.totalValue')}</Heading>
          <TotalText>{freight.total_price}</TotalText>
        </ColumnDet>
      </Row>
      <Buttom onPress={onPressDetails}>
        {strings('history.buttonDetail')}
      </Buttom>
    </Wrapper>
  );
};

export default observer(CardHistoryFreight);
