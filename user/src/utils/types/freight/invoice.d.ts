declare type Invoice = {
  month: string;
  amount: number;
  status: InvoiceStatus;
};

declare type InvoiceListItem = {
  id: number;
  description: string;
  value: string;
};

declare type InvoiceData = {
  clientName: string;
  clientAddress: string;
  userName: string;
  userAddress: string;
  invoiceID: string;
  invoiceDate: string;
  total: string;
  itens: InvoiceListItem[];
};
