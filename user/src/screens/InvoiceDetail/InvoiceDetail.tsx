import React from 'react';

import { strings } from '~/locale';
import { PAYMENT_STATUS } from '~/utils';

import {
  ButtonContest,
  ButtonContestText,
  ButtonSendEmail,
  ButtonSendEmailText,
  ButtonWrapper,
  ClientDetails,
  ClientInfo,
  DetailsText,
  GrayText,
  HorizontalBar,
  InvoiceDate,
  InvoiceID,
  InvoiceInfo,
  ItensDetailsText,
  ItensDetailsWrapperText,
  ItensHeader,
  ItensHeaderText,
  ItensInfo,
  ItensWrapper,
  ModalTag,
  StatusBar,
  StatusText,
  Title,
  TotalInfo,
  TotalInfoAmount,
  TotalWrapper,
  Wrapper,
  WrapperDetails,
} from './styles';

type Props = {
  invoice: InvoiceData;
};
const InvoiceDetail: React.FC<Props> = ({ invoice }) => (
  <Wrapper
    fullWidth
    isArrowButton
    hasScroll
    isCloseButton
    isMainSimpleHeader
    title={strings('modalDetails.title')}
  >
    <StatusBar animated />

    <WrapperDetails>
      <ClientInfo>
        <StatusText>{strings('modalDetails.paymentStatus')}</StatusText>
        <ModalTag status={PAYMENT_STATUS.PAID} />

        <Title>{strings('modalDetails.details')}</Title>
        <ClientDetails>
          <GrayText>{strings('modalDetails.userName')}</GrayText>
          <DetailsText>{invoice.userName}</DetailsText>

          <GrayText>{strings('modalDetails.userAddress')}</GrayText>
          <DetailsText>{invoice.userAddress}</DetailsText>
        </ClientDetails>
      </ClientInfo>

      <HorizontalBar />

      <ClientInfo>
        <Title>{strings('modalDetails.clientDetails')}</Title>
        <ClientDetails>
          <GrayText>{strings('modalDetails.clientName')}</GrayText>
          <DetailsText>{invoice.userName}</DetailsText>

          <GrayText>{strings('modalDetails.clientAddress')}</GrayText>
          <DetailsText>{invoice.userAddress}</DetailsText>
        </ClientDetails>
      </ClientInfo>

      <HorizontalBar />

      <InvoiceInfo>
        <InvoiceID>
          <GrayText>{strings('modalDetails.invoiceID')}</GrayText>
          <DetailsText>{invoice.invoiceID}</DetailsText>
        </InvoiceID>

        <InvoiceDate>
          <GrayText>{strings('modalDetails.invoiceData')}</GrayText>
          <DetailsText>{invoice.invoiceDate}</DetailsText>
        </InvoiceDate>
      </InvoiceInfo>
    </WrapperDetails>
    <ItensWrapper>
      <ItensHeader>
        <ItensHeaderText>{strings('modalDetails.itens')}</ItensHeaderText>
        <ItensHeaderText>{strings('modalDetails.subtotal')}</ItensHeaderText>
      </ItensHeader>

      <ItensInfo>
        {invoice.itens.map((item: InvoiceListItem) => (
          <ItensDetailsWrapperText key={item.id}>
            <ItensDetailsText>{item.description}</ItensDetailsText>
            <ItensDetailsText>{item.value}</ItensDetailsText>
          </ItensDetailsWrapperText>
        ))}
      </ItensInfo>
    </ItensWrapper>

    <HorizontalBar />
    <TotalWrapper>
      <TotalInfoAmount>{strings('modalDetails.total')}</TotalInfoAmount>
      <TotalInfo>{invoice.total}</TotalInfo>
    </TotalWrapper>

    <ButtonWrapper>
      <ButtonContest>
        <ButtonContestText>
          {strings('modalDetails.contestButton')}
        </ButtonContestText>
      </ButtonContest>
      <ButtonSendEmail>
        <ButtonSendEmailText>
          {strings('modalDetails.emailButton')}
        </ButtonSendEmailText>
      </ButtonSendEmail>
    </ButtonWrapper>
  </Wrapper>
);

export default InvoiceDetail;
