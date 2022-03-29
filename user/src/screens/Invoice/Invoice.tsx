import React from 'react';
import { strings } from '~/locale';
import {
  BodyTableList,
  HeaderWrapper,
  Row,
  TableTitle,
  TouchableRow,
  Wrapper,
} from './styles';

type Props = {
  data: Invoice[];
  handleNavigateInvoiceDetails(index: number): void;
  handleNavigateFilter(): void;
};

const Invoices: React.FC<Props> = ({
  data,
  handleNavigateInvoiceDetails,
  handleNavigateFilter,
}) => (
  <Wrapper
    fullWidth
    isMainHeader
    hasScroll={false}
    horizontal
    isArrowButton
    onPressFilter={handleNavigateFilter}
    showFilter
    title={strings('invoices.title')}
  >
    <HeaderWrapper>
      <TableTitle>{strings('invoices.tableTitle.month')}</TableTitle>
      <TableTitle>{strings('invoices.tableTitle.amount')}</TableTitle>
      <TableTitle>{strings('invoices.tableTitle.status')}</TableTitle>
    </HeaderWrapper>
    <BodyTableList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <TouchableRow
          key={index}
          onPress={() => handleNavigateInvoiceDetails(0)}
        >
          <Row month={item.month} amount={item.amount} status={item.status} />
        </TouchableRow>
      )}
    />
  </Wrapper>
);

export default Invoices;
