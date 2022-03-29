import React from 'react';
import { observer } from 'mobx-react';
import { View } from 'react-native';
import { If, RoundedCheckBox } from '~/components';
import { strings } from '~/locale';
import { isEmpty } from '~/modules';
import {
  Container,
  InputAmount,
  InputValue,
  InputWrapper,
  Next,
  SelectBoxRow,
  SubText,
  Text,
  TextValueEstimated,
  Wrapper,
} from './styles';

type Props = {
  handleNavigation(): void;
  onNext(): void;
  services: OtherService[];
  handleChangeValue(selected: boolean, id: number): void;
  handleChangeInputValue(value: string, id: number): void;
  handleChangeInputAmount(value: string, id: number): void;
};
const Service: React.FC<Props> = ({
  handleNavigation,
  onNext,
  services,
  handleChangeValue,
  handleChangeInputValue,
  handleChangeInputAmount,
}) => (
  <Wrapper
    onBackButtonPress={handleNavigation}
    title={strings('service.title')}
    fullWidth
    isMainSimpleHeader
  >
    <Container>
      <View>
        <TextValueEstimated>{strings('service.estimated')}</TextValueEstimated>
        <SubText>{strings('service.subTitle')}</SubText>
        <Text>{strings('service.text')}</Text>

        {!isEmpty(services) &&
          services.map((item) => (
            <SelectBoxRow key={item.id}>
              <RoundedCheckBox
                title={item.other_service_name}
                value={item.is_selected}
                onValueChange={(value: boolean) =>
                  handleChangeValue(value, item.id)
                }
              />
              <InputWrapper>
                <If condition={Boolean(item.allow_value) && item.is_selected}>
                  <InputValue
                    keyboardType="numeric"
                    label="Valor"
                    value={item.input_value}
                    onChangeText={(value) =>
                      handleChangeInputValue(value, item.id)
                    }
                  />
                </If>
                <If condition={Boolean(item.allow_amount) && item.is_selected}>
                  <InputAmount
                    keyboardType="numeric"
                    label="Quantidade"
                    value={item.input_amount}
                    onChangeText={(value) =>
                      handleChangeInputAmount(value, item.id)
                    }
                  />
                </If>
              </InputWrapper>
            </SelectBoxRow>
          ))}
      </View>
      <Next onPress={onNext}>{strings('service.next')}</Next>
    </Container>
  </Wrapper>
);

export default observer(Service);
