import React, { FC } from 'react';
import { IconVehicle } from '~/assets';
import { strings } from '~/locale';
import { Routes } from '~/navigation';
import {
  Container,
  Heading,
  Next,
  SubTitle,
  TextNewFreight,
  TouchNewFreight,
  Wrapper,
} from './styles';

type Props = {
  handleNavigate(screen: Routes): void;
  onNext(): void;
};

const FreightEnd: FC<Props> = ({ handleNavigate, onNext }) => (
  <Wrapper fullWidth>
    <Container>
      <IconVehicle />
      <Heading>{strings('freightEnd.title')}</Heading>
      <SubTitle>{strings('freightEnd.subTitle')}</SubTitle>
      <Next onPress={onNext}>{strings('freightEnd.home')}</Next>
      <TouchNewFreight
        onPress={() => handleNavigate(Routes.NEW_REQUEST_FREIGHT)}
      >
        <TextNewFreight>{strings('freightEnd.new')}</TextNewFreight>
      </TouchNewFreight>
    </Container>
  </Wrapper>
);

export default FreightEnd;
