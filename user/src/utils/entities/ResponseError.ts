/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import { AxiosError } from 'axios';
import { isEmpty } from '~/modules';

export default class ResponseError {
  message: string;

  code: number;

  constructor({ response, isAxiosError }: AxiosError) {
    const message =
      response?.status === 401
        ? 'Sua sessão expirou. Por favor faça o login de novo.'
        : !isEmpty(response?.data?.message)
        ? `${response?.data?.message}\n`
        : !isEmpty(response?.data?.errors)
        ? `${response?.data?.errors[0]}\n`
        : response?.status === 0
        ? 'Verifique a sua conexão com a internet'
        : 'Ocorreu um erro tente novamente';

    this.message = isAxiosError ? message : 'Ocorreu um erro tente novamente';
    this.code = response?.status || 0;
  }
}
