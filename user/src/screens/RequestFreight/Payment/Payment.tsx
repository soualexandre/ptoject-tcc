import React, { FC } from 'react';
import { FormikProps, useFormikContext } from 'formik';
import { RoundedCheckBox } from '~/components';
import { strings } from '~/locale';
import { REQUEST_FREIGHT_PAYMENT } from '~/utils';
import { FormPayment } from './formValues';
import {
  Check,
  Container,
  ContainerPayment,
  Heading,
  InfoPayment,
  Input,
  Next,
  TitlePayment,
  TypePayment,
  Wrapper,
} from './styles';

type Props = {
  balanceAvailable: string;
  toggleCheckPayment: number;
  setToggleCheckPayment(value: number): void;
  handleNavigation(): void;
};

const Payment: FC<Props> = ({
  handleNavigation,
  setToggleCheckPayment,
  balanceAvailable,
  toggleCheckPayment,
}) => {
  const { submitForm, values, errors, handleChange }: FormikProps<FormPayment> =
    useFormikContext();

  const handleSubmit = (): void => {
    submitForm();
  };

  return (
    <Wrapper
      onBackButtonPress={handleNavigation}
      title={strings('payment.title')}
      fullWidth
      isMainSimpleHeader
    >
      <Container>
        {/*         <Heading>
          {`${strings('payment.balanceAvailable')} ${balanceAvailable}`}
        </Heading> */}
        <TypePayment>
          <RoundedCheckBox
            title={strings('payment.payCash')}
            value={REQUEST_FREIGHT_PAYMENT.PAYMENT_MONEY === toggleCheckPayment}
            onValueChange={() =>
              setToggleCheckPayment(REQUEST_FREIGHT_PAYMENT.PAYMENT_MONEY)
            }
            unavailable
          />
          {/*  <Check
            title={strings('payment.payCard')}
            boxType="circle"
            value={toggleCheckPayment === REQUEST_FREIGHT_PAYMENT.PAYMENT_CARD}
            onValueChange={() =>
              setToggleCheckPayment(REQUEST_FREIGHT_PAYMENT.PAYMENT_CARD)
            }
          />
          <Check
            title={strings('payment.payCredit')}
            boxType="circle"
            value={
              toggleCheckPayment ===
              REQUEST_FREIGHT_PAYMENT.PAYMENT_CREDIT_IN_ACCOUNT
            }
            onValueChange={() =>
              setToggleCheckPayment(
                REQUEST_FREIGHT_PAYMENT.PAYMENT_CREDIT_IN_ACCOUNT,
              )
            }
          /> */}
        </TypePayment>
        {/*  <InfoPayment>
          <TitlePayment>{strings('payment.card')}</TitlePayment>
          <ContainerPayment>
            <Input
              value={values.cardNumber}
              error={errors.cardNumber}
              onChangeText={handleChange('cardNumber')}
              label={strings('payment.numberCard')}
            />
            <Input
              value={values.fullName}
              error={errors.fullName}
              onChangeText={handleChange('fullName')}
              label={strings('payment.nameHolder')}
            />
            <Input
              value={values.date}
              error={errors.date}
              onChangeText={handleChange('date')}
              label={strings('payment.dueDate')}
            />
            <Input
              value={values.securityCode}
              error={errors.securityCode}
              onChangeText={handleChange('securityCode')}
              label={strings('payment.securityCode')}
            />
            <Input
              value={values.cardholder}
              error={errors.cardholder}
              onChangeText={handleChange('cardholder')}
              label={strings('payment.cardholder')}
            />
          </ContainerPayment>
        </InfoPayment> */}
        <Next onPress={handleSubmit}>{strings('payment.next')}</Next>
      </Container>
    </Wrapper>
  );
};

export default Payment;
