import React, { FC } from 'react';

import { FREIGHT_STATUS, PAYMENT_STATUS } from '~/utils';
import { Title, Wrapper } from './styles';

type Props = {
  status: PAYMENT_STATUS | FREIGHT_STATUS;
  label?: string;
};

const Tag: FC<Props> = ({ status, label, ...rest }) => (
  <Wrapper status={status} {...rest}>
    <Title status={status}>{label || status}</Title>
  </Wrapper>
);
export default Tag;
