import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { strings } from '~/locale';
import { PAYMENT_STATUS } from '~/utils';

import { Column, Heading, Row, Tag, Text, TotalText, Wrapper } from './styles';

type Props = {
  freight: FreightDetails;
};

const CardFreightDetail: FC<Props> = ({ freight }: Props) => (
  <Wrapper>
    <Row>
      <Column>
        <Heading>{strings('freightDetail.freightStatus')}</Heading>
        <Tag status={1} label={freight.request.request_status} />
      </Column>
    </Row>
    <Row>
      <Column>
        <Heading>{strings('freightDetail.id')}</Heading>
        <Text>{freight.request.request_id}</Text>
      </Column>
      <Column flex={2}>
        <Heading>{strings('freightDetail.provider')}</Heading>
        <Text>{freight.provider.provider_name}</Text>
      </Column>
    </Row>

    <Row>
      <Column>
        <Heading>{strings('freightDetail.dateHour')}</Heading>
        <Text>{freight.request.req_create_user_time}</Text>
      </Column>
    </Row>

    <Row>
      <Column flex={2}>
        <Heading>{strings('freightDetail.paymentMethod')}</Heading>
        <Text>{freight.request.payment_method}</Text>
      </Column>

      <Column>
        <Heading>{strings('freightDetail.points')}</Heading>
        <Text>{freight.points.points_quantity}</Text>
      </Column>
    </Row>

    <Row>
      <Column flex={2}>
        <Heading>{strings('freightDetail.totalDistance')}</Heading>
        <Text>{freight.request.total_distance}</Text>
      </Column>

      <Column>
        <Heading>{strings('freightDetail.estimateTime')}</Heading>
        <Text>{freight.request.estimate_time}</Text>
      </Column>
    </Row>
    <Row>
      <Column>
        <Heading>{strings('freightDetail.vehicleInfo')}</Heading>
        <Text>{freight.request.type_name}</Text>
      </Column>
    </Row>

    <Row>
      <Column flex={2}>
        <Heading>{strings('freightDetail.product')}</Heading>
        <Text>{freight.request.product_name}</Text>
      </Column>

      <Column>
        <Heading>{strings('freightDetail.weight')}</Heading>
        <Text>{freight.request.weight}</Text>
      </Column>
    </Row>

    <Row>
      <Column flex={2}>
        <Heading>{strings('freightDetail.negotiationQuantity')}</Heading>
        <Text>{freight.request.count_negociations}</Text>
      </Column>

      <Column>
        <Heading>{strings('freightDetail.proposeValue')}</Heading>
        <Text>{freight.request.proposed_price}</Text>
      </Column>
    </Row>

    <Row>
      <Column>
        <Heading>{strings('freightDetail.paymentStatus')}</Heading>
        <Tag status={PAYMENT_STATUS.PAID} label={PAYMENT_STATUS.PAID} />
      </Column>
    </Row>
    <Row>
      <Heading>{strings('freightDetail.totalValue')}</Heading>
      <TotalText>{freight.request.total_value}</TotalText>
    </Row>
  </Wrapper>
);

export default observer(CardFreightDetail);
