import React, { FC } from 'react';
import { View } from 'react-native';
import { InputMask } from '~/components';
import { strings } from '~/locale';
import { FormikProps, useFormikContext } from '~/modules';
import { FormChangePassword } from './formValues';
import { Button, FormWrapper, Input, Wrapper } from './styles';

type Props = {
  currentMask: boolean;
  newMask: boolean;
  confirmMask: boolean;
  toggleCurrentMask: () => void;
  toggleNewMask: () => void;
  toggleConfirmMask: () => void;
};

const EditProfilePassword: FC<Props> = ({
  currentMask,
  newMask,
  confirmMask,
  toggleCurrentMask,
  toggleNewMask,
  toggleConfirmMask,
}) => {
  const {
    submitForm,
    values,
    errors,
    handleChange,
    isSubmitting,
  }: FormikProps<FormChangePassword> = useFormikContext();

  return (
    <Wrapper
      title={strings('infoAccount.changePassword')}
      fullWidth
      isMainSimpleHeader
      bounces={false}
    >
      <FormWrapper>
        <View>
          <Input
            label={strings('changePassword.current')}
            value={values.current}
            error={errors.current}
            onChangeText={handleChange('current')}
            secureTextEntry={currentMask}
          />
          <InputMask
            toggle={toggleCurrentMask}
            state={currentMask}
            position={0}
          />
          <Input
            label={strings('changePassword.new')}
            value={values.new}
            error={errors.new}
            onChangeText={handleChange('new')}
            secureTextEntry={newMask}
          />
          <InputMask toggle={toggleNewMask} state={newMask} position={1} />
          <Input
            label={strings('changePassword.confirm')}
            value={values.confirm}
            error={errors.confirm}
            onChangeText={handleChange('confirm')}
            secureTextEntry={confirmMask}
          />
          <InputMask
            toggle={toggleConfirmMask}
            state={confirmMask}
            position={2}
          />
        </View>
        <Button onPress={submitForm} isLoading={isSubmitting}>
          {strings('changePassword.save')}
        </Button>
      </FormWrapper>
    </Wrapper>
  );
};

export default EditProfilePassword;
