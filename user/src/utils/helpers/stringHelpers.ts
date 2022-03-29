export const getRawPhone = (phone: string): string =>
  phone.replace('(', '').replace(')', '').replace('-', '');
