export enum FIELDS_TYPE {
  FREIGHT_STATUS = 'freight_status',
  TRANSACTION_TYPES = 'transaction_types',
  TRANSACTION_STATUS = 'transaction_status',
  PAYMENT_METHODS = 'payment_methods',
  LOAD_SPECIES = 'load_species',
  LOAD_PRODUCTS = 'load_products',
  PROVIDER_TYPES = 'provider_types',
  PROVIDER_TYPE_CATEGORIES = 'provider_type_categories',
  BODYWORKS = 'bodyworks',
  OTHER_SERVICES = 'other_services',
}

export type PropsAutoComple = {
  fields?: Partial<FIELDS_TYPE[]>;
  load_specie_id?: number;
  provider_type_id?: number;
};
