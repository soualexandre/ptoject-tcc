import React from 'react';
import { strings } from '~/locale';
import {
  Container,
  InformatingNewFreight,
  Next,
  StepsName,
  StepsNumber,
  StepsRow,
  Title,
  Wrapper,
} from './styles';

type Props = {
  onNext(): void;
  isLoading: boolean;
};

const NewFreight: React.FC<Props> = ({ onNext, isLoading }) => (
  <Wrapper isMainHeader fullWidth title={strings('newFreight.titleScreen')}>
    <Container>
      <InformatingNewFreight>
        <Title>{strings('newFreight.title')}</Title>
        <StepsRow>
          <StepsNumber>1</StepsNumber>
          <StepsName>{strings('newFreight.stepsOne')}</StepsName>
        </StepsRow>
        <StepsRow>
          <StepsNumber>2</StepsNumber>
          <StepsName>{strings('newFreight.stepsTwo')}</StepsName>
        </StepsRow>
        <StepsRow>
          <StepsNumber>3</StepsNumber>
          <StepsName>{strings('newFreight.stepsThree')}</StepsName>
        </StepsRow>
        <StepsRow>
          <StepsNumber>4</StepsNumber>
          <StepsName>{strings('newFreight.stepsFour')}</StepsName>
        </StepsRow>
        <StepsRow>
          <StepsNumber>5</StepsNumber>
          <StepsName>{strings('newFreight.stepsFive')}</StepsName>
        </StepsRow>
        <StepsRow>
          <StepsNumber>6</StepsNumber>
          <StepsName>{strings('newFreight.stepsSix')}</StepsName>
        </StepsRow>
      </InformatingNewFreight>
      <Next onPress={onNext} isLoading={isLoading}>
        {strings('newFreight.button')}
      </Next>
    </Container>
  </Wrapper>
);

export default NewFreight;
