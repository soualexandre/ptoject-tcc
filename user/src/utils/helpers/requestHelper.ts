export const getAlphabetPoint = (index: number): string => {
  const alphabet = ['B', 'C', 'D', 'E', 'F', 'G', 'H'];

  return alphabet[index];
};

export const getNumberFromString = (index: string | number): number => {
  if (typeof index === 'string') {
    const value = index.split(' ');

    return parseInt(value[0], 10);
  }
  if (typeof index === 'number') {
    return index;
  }
  return 0;
};

type FreightParams = {
  value: number;
  status_name: string;
}[];

type TransactionParams = {
  value: string;
  type_name: string;
}[];

type PaymentParams = {
  value: number;
  method_name: string;
}[];

type Options = {
  label: string;
  value: number | string;
}[];

export const getOptionsDropDownFreight = (
  value: FreightParams | undefined,
): Options => {
  if (value) {
    if (value[0].status_name) {
      const newJson = value.map((value) => ({
        label: value.status_name,
        value: value.value,
      }));

      return newJson;
    }
  }
  return [
    {
      label: '',
      value: -1,
    },
  ];
};

export const getOptionsDropDownFreightId = (
  value: FreightParams | undefined,
): Options => {
  if (value) {
    if (value[0].status_name) {
      const newJson = value.map((value) => ({
        label: value.status_name,
        value: value.value,
      }));

      return newJson;
    }
  }
  return [
    {
      label: '',
      value: -1,
    },
  ];
};
export const getOptionsDropDownPayment = (
  value: PaymentParams | undefined,
): Options => {
  if (value) {
    if (value[0].method_name) {
      const newJson = value.map((value) => ({
        label: value.method_name,
        value: value.value,
      }));

      return newJson;
    }
  }
  return [
    {
      label: '',
      value: -1,
    },
  ];
};

export const getOptionsDropDownTransaction = (
  value: TransactionParams | undefined,
): Options => {
  if (value) {
    if (value[0].type_name) {
      const newJson = value.map((value) => ({
        label: value.type_name,
        value: value.value,
      }));

      return newJson;
    }
  }
  return [
    {
      label: '',
      value: '',
    },
  ];
};

export const getBooleanFromString = (value: string): boolean => {
  if (value === '1') return true;

  return false;
};
