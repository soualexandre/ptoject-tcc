import styled from 'styled-components/native';
import { scale } from '~/modules';
import { FREIGHT_STATUS, PAYMENT_STATUS, getTheme } from '~/utils';
import Typography from '../Typography';

type WrapperProps = {
  status: PAYMENT_STATUS | FREIGHT_STATUS;
};

type PropsPaymentStatus = {
  [PAYMENT_STATUS.PAID]: any;
  [PAYMENT_STATUS.PENDING]: any;
  [PAYMENT_STATUS.REFUSED]: any;
  [PAYMENT_STATUS.NOT_CONCLUDED]: any;
  [PAYMENT_STATUS.FREIGHT_NOT_CONCLUDED]: any;
  [FREIGHT_STATUS.IN_NEGOCIATION]: any;
  [FREIGHT_STATUS.IN_PROGRESS]: any;
  [FREIGHT_STATUS.DELIVERED]: any;
  [FREIGHT_STATUS.WAITING_CONFIRMATION]: any;
  [FREIGHT_STATUS.WAITING_TO_START]: any;
  [FREIGHT_STATUS.STARTED]: any;
  [FREIGHT_STATUS.LATE_COLLECTION]: any;
  [FREIGHT_STATUS.COLLECTED]: any;
  [FREIGHT_STATUS.LATE_DELIVERY]: any;
  [FREIGHT_STATUS.CANCELED]: any;
};

const color: PropsPaymentStatus = {
  [PAYMENT_STATUS.PAID]: getTheme('info.main'),
  [PAYMENT_STATUS.PENDING]: getTheme('warning.main'),
  [PAYMENT_STATUS.REFUSED]: getTheme('failure.main'),
  [PAYMENT_STATUS.NOT_CONCLUDED]: getTheme('failure.main'),
  [PAYMENT_STATUS.FREIGHT_NOT_CONCLUDED]: getTheme('info.main'),
  [FREIGHT_STATUS.IN_NEGOCIATION]: getTheme('warning.main'),
  [FREIGHT_STATUS.IN_PROGRESS]: getTheme('warning.main'),
  [FREIGHT_STATUS.DELIVERED]: getTheme('success.main'),
  [FREIGHT_STATUS.WAITING_CONFIRMATION]: getTheme('warning.main'),
  [FREIGHT_STATUS.WAITING_TO_START]: getTheme('warning.main'),
  [FREIGHT_STATUS.STARTED]: getTheme('warning.main'),
  [FREIGHT_STATUS.LATE_COLLECTION]: getTheme('warning.main'),
  [FREIGHT_STATUS.COLLECTED]: getTheme('success.main'),
  [FREIGHT_STATUS.LATE_DELIVERY]: getTheme('success.main'),
  [FREIGHT_STATUS.CANCELED]: getTheme('failure.main'),
};

const backgroundColor: PropsPaymentStatus = {
  [PAYMENT_STATUS.PAID]: getTheme('info.light'),
  [PAYMENT_STATUS.PENDING]: getTheme('warning.light'),
  [PAYMENT_STATUS.REFUSED]: getTheme('failure.light'),
  [PAYMENT_STATUS.NOT_CONCLUDED]: getTheme('failure.light'),
  [PAYMENT_STATUS.FREIGHT_NOT_CONCLUDED]: getTheme('info.light'),
  [FREIGHT_STATUS.IN_NEGOCIATION]: getTheme('warning.light'),
  [FREIGHT_STATUS.IN_PROGRESS]: getTheme('warning.light'),
  [FREIGHT_STATUS.DELIVERED]: getTheme('success.light'),
  [FREIGHT_STATUS.WAITING_CONFIRMATION]: getTheme('warning.light'),
  [FREIGHT_STATUS.WAITING_TO_START]: getTheme('warning.light'),
  [FREIGHT_STATUS.STARTED]: getTheme('warning.light'),
  [FREIGHT_STATUS.LATE_COLLECTION]: getTheme('warning.light'),
  [FREIGHT_STATUS.COLLECTED]: getTheme('success.light'),
  [FREIGHT_STATUS.LATE_DELIVERY]: getTheme('success.light'),
  [FREIGHT_STATUS.CANCELED]: getTheme('failure.light'),
};

export const Wrapper = styled.View<WrapperProps>`
  align-items: center;
  justify-content: center;
  border-radius: ${getTheme('smallRadius')};
  background-color: ${({ status }) => backgroundColor[status]};
`;

export const Title = styled(Typography).attrs({
  variant: 'callout',
})<WrapperProps>`
  color: ${({ status }) => color[status]};
  text-align: center;
  padding: ${scale(10)}px;
`;
