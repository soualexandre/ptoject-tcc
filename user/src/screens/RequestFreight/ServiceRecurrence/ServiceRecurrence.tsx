import React, { FC } from 'react';
import { View } from 'react-native';
import { RoundedCheckBox } from '~/components';
import { strings } from '~/locale';
import { Container, Heading, Next, Wrapper } from './styles';

type Props = {
  onGoBack(): void;
  onNext(): void;
  toggleServiceRecurrence: boolean;
  setToggleServiceRecurrence(value: boolean): void;
};
const ServiceRecurrence: FC<Props> = ({
  onGoBack,
  onNext,
  setToggleServiceRecurrence,
  toggleServiceRecurrence,
}) => (
  <Wrapper
    onBackButtonPress={onGoBack}
    title={strings('serviceRecurrence.title')}
    fullWidth
    fullHeight
    isMainSimpleHeader
  >
    <Container>
      <View>
        <Heading>{strings('serviceRecurrence.check')}</Heading>
        <RoundedCheckBox
          title={strings('serviceRecurrence.heading')}
          value={toggleServiceRecurrence}
          onValueChange={(value) => setToggleServiceRecurrence(value)}
        />
      </View>
      <Next onPress={onNext}>{strings('serviceRecurrence.next')}</Next>
    </Container>
  </Wrapper>
);

export default ServiceRecurrence;
