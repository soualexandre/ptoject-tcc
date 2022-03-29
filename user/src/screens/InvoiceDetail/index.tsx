import React, { FC } from 'react';
import InvoiceDetail from './InvoiceDetail';

const invoice = {
  clientName: 'Luciana Meldetres',
  clientAddress:
    'Rua Costa Sena, 1523, ap 42, Caiçara - Belo Horizonte, MG - 30.213-122',
  userName: 'Luciana Meldetres',
  userAddress:
    'Rua Costa Sena, 1523, ap 42, Caiçara - Belo Horizonte, MG - 30.213-122',
  invoiceID: '02190121',
  invoiceDate: '01/04/2021',
  itens: [
    { id: 1, description: 'Descrição Frete 1', value: 'R$ 4.192,90' },
    { id: 2, description: 'Descrição Frete 2', value: 'R$ 4.192,90' },
    { id: 3, description: 'Descrição Frete 3', value: 'R$ 4.192,90' },
  ],
  total: 'R$ 5.402,12',
};

export const InvoicesContainer: FC = () => <InvoiceDetail invoice={invoice} />;
export default InvoicesContainer;
