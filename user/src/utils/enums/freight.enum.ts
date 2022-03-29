export enum PAYMENT_STATUS {
  PAID = 'Pago',
  PENDING = 'Pendente',
  REFUSED = 'Recusado',
  NOT_CONCLUDED = 'Não concluído',
  FREIGHT_NOT_CONCLUDED = 'Frete não concluído',
}

export enum FREIGHT_STATUS {
  WAITING_CONFIRMATION = 1,
  IN_NEGOCIATION = 2,
  WAITING_TO_START = 3,
  STARTED = 4,
  LATE_COLLECTION = 5,
  COLLECTED = 6,
  IN_PROGRESS = 7,
  LATE_DELIVERY = 8,
  DELIVERED = 9,
  CANCELED = 10,
}

export enum PHOTO_TYPE {
  CARGO_IMAGE = 'cargo_image',
  CARGO_DOCUMENT = 'cargo_document',
}

export enum FREIGHT_PAGINATOR {
  CURRENT_PAGE = 1,
  ITENS_PER_PAGE = 10,
}

export enum FREIGHT_ADRESS_TYPE {
  COLLECT = 0,
  DELIVERY = 1,
}
