import React from 'react';
import { View } from 'react-native';
import { If, LoadingIndicator } from '~/components';
import { strings } from '~/locale';
import {
  Container,
  Drop,
  Next,
  SubText,
  TextValueEstimated,
  Wrapper,
} from './styles';

type Props = {
  handleNavigation(): void;
  onChangeBodyworks(value: string): void;
  onChangeProviderType(value: string): void;
  onChangeProviderTypeCategory(value: string): void;
  onNext(): void;
  provider_types: string[];
  provider_types_category: string[];
  bodyworks: string[];
  isLoading: boolean;
};

const Vehicle: React.FC<Props> = ({
  handleNavigation,
  provider_types,
  provider_types_category,
  bodyworks,
  onChangeBodyworks,
  onChangeProviderType,
  onChangeProviderTypeCategory,
  onNext,
  isLoading,
}) => (
  <Wrapper
    onBackButtonPress={handleNavigation}
    title={strings('vehicle.title')}
    fullWidth
    isMainSimpleHeader
  >
    <If condition={isLoading}>
      <LoadingIndicator color="black" />
    </If>
    <If condition={!isLoading}>
      <Container>
        <View>
          <TextValueEstimated>{strings('vehicle.title')}</TextValueEstimated>
          <SubText>{strings('vehicle.subTitle')}</SubText>
          <Drop
            title={strings('vehicle.titleVehicle')}
            items={provider_types}
            onChangeItem={onChangeProviderType}
          />
          <Drop
            title={strings('vehicle.subVehicle')}
            items={provider_types_category}
            onChangeItem={onChangeProviderTypeCategory}
            defaultValue={strings('general.selectCategory')}
          />
          <Drop
            title={strings('vehicle.typeVehicle')}
            items={bodyworks}
            onChangeItem={onChangeBodyworks}
          />
        </View>
        <Next onPress={onNext}>{strings('vehicle.next')}</Next>
      </Container>
    </If>
  </Wrapper>
);

export default Vehicle;
