import React, { FC } from 'react';
import { strings } from '~/locale';
import { FormikProps, useFormikContext } from '~/modules';
import { FormEditProfileAddress } from './formValues';
import {
  Button,
  FormWrapper,
  Input,
  InputCountry,
  InputState,
  Row,
  Wrapper,
} from './styles';

type Props = {
  onGoBack(): void;
};

const EditProfileAddress: FC<Props> = ({ onGoBack }) => {
  const {
    submitForm,
    values,
    errors,
    handleChange,
    isSubmitting,
  }: FormikProps<FormEditProfileAddress> = useFormikContext();

  return (
    <Wrapper
      title={strings('address.title')}
      fullWidth
      isMainSimpleHeader
      bounces={false}
      onBackButtonPress={onGoBack}
    >
      <FormWrapper>
        {/* <Input
          label={strings('address.cep')}
          value={values.zip_code}
          error={errors.zip_code}
          keyboardType="numeric"
          onChangeText={handleChange('zip_code')}
        /> */}
        <Input
          label={strings('address.street')}
          value={values.street}
          error={errors.street}
          onChangeText={handleChange('street')}
          autoCapitalize="sentences"
        />
        <Input
          label={strings('address.number')}
          value={values.number.toString()}
          error={errors.number}
          options={{ mask: '99999999' }}
          keyboardType="numeric"
          onChangeText={handleChange('number')}
        />
        <Input
          label={strings('address.complement')}
          value={values.complement}
          error={errors.complement}
          onChangeText={handleChange('complement')}
          autoCapitalize="sentences"
        />
        {/* <Input
          label={strings('address.neighborhood')}
          value={values.district}
          error={errors.district}
          onChangeText={handleChange('district')}
        /> */}
        <Input
          label={strings('address.city')}
          value={values.city}
          error={errors.city}
          onChangeText={handleChange('city')}
          autoCapitalize="sentences"
        />
        <Row>
          <InputState
            label={strings('address.state')}
            value={values.state}
            error={errors.state}
            onChangeText={handleChange('state')}
            autoCapitalize="characters"
          />
          <InputCountry
            label={strings('address.country')}
            value={values.country}
            error={errors.country}
            onChangeText={handleChange('country')}
            autoCapitalize="sentences"
          />
        </Row>
      </FormWrapper>
      <Button onPress={submitForm} isLoading={isSubmitting}>
        {strings('general.save')}
      </Button>
    </Wrapper>
  );
};

export default EditProfileAddress;
