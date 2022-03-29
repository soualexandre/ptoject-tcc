import React, { FC } from 'react';
import { IconVehicle } from '~/assets';
import { Title, Wrapper } from './styles';

type Props = {
  emptyFreight: string;
};
const EmptyHistoryFreight: FC<Props> = ({ emptyFreight }) => (
  <Wrapper>
    <IconVehicle />
    <Title>{emptyFreight}</Title>
  </Wrapper>
);

export default EmptyHistoryFreight;
