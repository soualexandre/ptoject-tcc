import React, { FC } from 'react';
import { isEmpty } from '~/modules';
import If from '../If';
import {
  Add,
  Address,
  ButtonOption,
  ButtonPlus,
  CirclePoint,
  Close,
  IconPencil,
  Information,
  Point,
  SubAddress,
  Wrapper,
  WrapperIcon,
  WrapperSubAddress,
} from './styles';

type Props = {
  subAddress?: string;
  point: string;
  address: string;
  onPressEdit?(): void;
  onPressClose?(): void;
  addNewAddress?(): void;
};

const CardPoint: FC<Props> = ({
  subAddress = '',
  point,
  address,
  onPressEdit,
  onPressClose,
  addNewAddress,
}) => {
  const hasSubAddress = !isEmpty(subAddress);
  return (
    <Wrapper>
      <Information>
        <CirclePoint>
          <Point>{point}</Point>
        </CirclePoint>

        <WrapperSubAddress>
          <Address>{address}</Address>
          <If condition={hasSubAddress}>
            <SubAddress>{subAddress}</SubAddress>
          </If>
        </WrapperSubAddress>
      </Information>

      <WrapperIcon>
        <If condition={!hasSubAddress}>
          <ButtonOption onPress={onPressEdit}>
            <IconPencil />
          </ButtonOption>
          <ButtonOption onPress={onPressClose}>
            <Close />
          </ButtonOption>
        </If>
        <If condition={hasSubAddress}>
          <ButtonPlus onPress={addNewAddress}>
            <Add />
          </ButtonPlus>
        </If>
      </WrapperIcon>
    </Wrapper>
  );
};

export default CardPoint;
