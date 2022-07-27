import React from 'react';
import { Text } from 'react-native-paper';
import { strings } from '~/locale';

import { Wrapper } from './styles';

type Props = {
  data: Invoice[];
  handleNavigateInvoiceDetails(index: number): void;
  handleNavigateFilter(): void;
};

const ShowCartItmems: React.FC<Props> = () => (
  <Wrapper
    isMainSimpleHome
    isCloseButton
    fullWidth
    showSearchInput
    isFixed
    showAvatar
  >
    <Text style={{ paddingLeft: 20, textAlign: 'center', fontWeight: 'bold' }}>
      Confirmação de agendamento
    </Text>
  </Wrapper>
);

export default ShowCartItmems;
