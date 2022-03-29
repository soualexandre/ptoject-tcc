import '@testing-library/jest-native/extend-expect';

import * as React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { fireEvent, render } from '@testing-library/react-native';
import { Routes } from '~/navigation';
import { theme } from '../../../theme';
import Login from '../index';
import LoginDamp from '../Login';

it('render screen login', () => {
  render(
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>,
  );
});
it('renders default elements', () => {
  const { getAllByText, getByLabelText } = render(
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>,
  );

  expect(getAllByText('Mobile fretes').length).toBe(1);
  getByLabelText('Insira seu e-mail ou telefone');
  getByLabelText('Senha');
});

it('show invalid input messages', () => {
  const { getByTestId, getByText } = render(
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>,
  );

  fireEvent.press(getByTestId('SignIn.LoginNow'));

  getByText('Insira o e-mail ou telefone');
  getByText('Insira a senha');
});

// it('shows invalid user name error message', () => {
//   const { getByTestId, getByText, queryAllByText } = render(
//     <ThemeProvider theme={theme}>
//       <Login />
//     </ThemeProvider>,
//   );

//   fireEvent.changeText(getByTestId('SignIn.passwoordInput'), 'asdf');
//   fireEvent.press(getByTestId('SignIn.LoginNow'));
//   getByText('Insira o e-mail ou telefone');
//   expect(queryAllByText('Insira a senha').length).toBe(0);
// });

// it('show invalid input messages', () => {
//   const { getByTestId, getByText } = render(
//     <ThemeProvider theme={theme}>
//       <LoginDamp handleNavigate={() => Routes.LOGIN} />
//     </ThemeProvider>,
//   );
// });
