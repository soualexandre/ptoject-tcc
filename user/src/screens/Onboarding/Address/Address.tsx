import React from 'react';
import { FormikProps, useFormikContext } from 'formik';
import { strings } from '~/locale';
import { isEmpty } from '~/modules';
import { getZipCodeMask, useAlerts } from '~/utils';
import { FormAddress } from './formValues';

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
  isLoading: boolean;
};

const Address: React.FC<Props> = ({ isLoading }) => {
  const {
    submitForm,
    values,
    errors,
    handleChange,
    validateForm,
  }: FormikProps<FormAddress> = useFormikContext();

  const { showError } = useAlerts();

  const handleSubmit = async () => {
    const fields = await validateForm();

    if (isEmpty(fields)) {
      return submitForm();
    }
    showError(strings('error.unknow'));
  };

  return (
    <Wrapper
      title={strings('address.title')}
      description={strings('address.description')}
      isOnBoardingHeader
      isArrowButton
      hasScroll={false}
    >
      <FormWrapper>
        {/* <Input
          label={strings('address.cep')}
          value={values.cep}
          options={getZipCodeMask()}
          error={errors.cep}
          keyboardType="numeric"
          onChangeText={handleChange('cep')}
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
          value={values.number}
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
          value={values.disctrict}
          error={errors.disctrict}
          onChangeText={handleChange('disctrict')}
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
      <Button onPress={handleSubmit} isLoading={isLoading}>
        {strings('general.finish')}
      </Button>
    </Wrapper>
  );
};

export default Address;
