import React, { FC, useState } from 'react';
import { NavigationActions, Routes, Stacks } from '~/navigation';
import { FILTER_TYPE, PAYMENT_STATUS } from '~/utils';
import Invoice from './Invoice';

const invoices = [
  {
    month: 'Janeiro',
    amount: 1000,
    status: PAYMENT_STATUS.PAID,
  },
  {
    month: 'Fevereiro',
    amount: 5402.12,
    status: PAYMENT_STATUS.PAID,
  },
  {
    month: 'Março',
    amount: 5402.12,
    status: PAYMENT_STATUS.PAID,
  },
  {
    month: 'Abril',
    amount: 5402.12,
    status: PAYMENT_STATUS.PENDING,
  },
  {
    month: 'Maio',
    amount: 5402.12,
    status: PAYMENT_STATUS.PENDING,
  },
  {
    month: 'Junho',
    amount: 5402.12,
    status: PAYMENT_STATUS.REFUSED,
  },
  {
    month: 'Julho',
    amount: 5402.12,
    status: PAYMENT_STATUS.PENDING,
  },
  {
    month: 'Agosto',
    amount: 5402.12,
    status: PAYMENT_STATUS.PENDING,
  },
  {
    month: 'Setembro',
    amount: 5402.12,
    status: PAYMENT_STATUS.PENDING,
  },
  {
    month: 'Outubro',
    amount: 5402.12,
    status: PAYMENT_STATUS.PENDING,
  },
  {
    month: 'Novembro',
    amount: 5402.12,
    status: PAYMENT_STATUS.PENDING,
  },
  {
    month: 'Dezembro',
    amount: 5402.12,
    status: PAYMENT_STATUS.PENDING,
  },
  {
    month: 'xx',
    amount: 5402.12,
    status: PAYMENT_STATUS.PENDING,
  },
  {
    month: 'yy',
    amount: 5402.12,
    status: PAYMENT_STATUS.PENDING,
  },
];

export const InvoicesContainer: FC = () => {
  const handleNavigateFilter = () => {
    NavigationActions.navigate(Stacks.MODAL, {
      screen: Routes.FILTER,
      params: {
        type: FILTER_TYPE.INVOICE,
      },
    });
  };

  const handleNavigateInvoiceDetails = (index: number) => {
    NavigationActions.navigate(Stacks.MODAL, {
      screen: Routes.INVOICE_DETAILS,
      params: {
        id: index,
      },
    });
  };

  return (
    <Invoice
      data={invoices}
      handleNavigateInvoiceDetails={handleNavigateInvoiceDetails}
      handleNavigateFilter={handleNavigateFilter}
    />
  );
};
export default InvoicesContainer;
