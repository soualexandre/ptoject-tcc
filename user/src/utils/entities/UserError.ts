import { AxiosResponse } from 'axios';

const defaultData = {
  data: { message: 'Erro Inesperado, tente novamente', status: 500 },
};

export default class UserApiError {
  response = defaultData;

  constructor(response: AxiosResponse) {
    this.response = response?.data?.error
      ? {
          data: {
            message: response?.data?.error,
            status: Number(response?.data?.error_code),
          },
        }
      : this.response;
  }
}
