import { useStores } from '~/utils';

export function useCurrencyFormat() {
  const { user } = useStores();
  const currencyFormat = (num: string) => {
    let currency = '';
    const ln = user.settings.splash_settings.language;

    if (ln === 'pt-AO') {
      currency = 'Kz';
    } else if (ln === 'pt-BR') {
      currency = 'R$';
    } else if (ln === 'en') {
      currency = 'USD';
    }

    return `${Number(num)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} ${currency}`;
  };
  return { currencyFormat };
}
