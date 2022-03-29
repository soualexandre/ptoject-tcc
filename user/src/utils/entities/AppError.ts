// @TODO essa classe precisa ser refeita conforme o retorno que a API
// exemplo: success, error, etc
/* eslint-disable indent */
import { AxiosResponse } from 'axios';

const defaultData = {
  data: { message: 'Erro Inesperado, tente novamente', status: 500 },
};
export default class AppError {
  response = defaultData;

  constructor(response: AxiosResponse) {
    this.response = response?.data?.message
      ? {
          data: {
            message: response?.data?.message,
            status: Number(response?.data?.httpcode),
          },
        }
      : this.response;
  }
}
