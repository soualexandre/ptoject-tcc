import * as React from 'react';
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { FormContainer } from '~/components';
import { FormikHelpers } from '~/modules';
import { NavigationActions, Routes, Stacks } from '~/navigation';
import { useAlerts, useStores } from '~/utils';
import { FormLogin, initialValues } from './formValues';
import Login from './Login';
import { validationSchema } from './validationSchema';

export const LoginContainer: React.FC = () => {
  const { user } = useStores();
  const [passwordMask, setPasswordMask] = useState(true);
  const { showError } = useAlerts();

  const handleNavigate = (route: Routes): void => {
    NavigationActions.navigate(route);
  };

  const togglePasswordMask = () => {
    setPasswordMask((oldstate) => !oldstate);
  };

  const getIconName = () => (passwordMask ? 'eye-off' : 'eye');

  const onSubmit = async (
    values: FormLogin,
    { setSubmitting }: FormikHelpers<FormLogin>,
  ): Promise<void> => {
    const data = {
      ...values,
    };
    try {
      setSubmitting(true);
      await user.login(data);
      NavigationActions.resetRouteToTop(Stacks.PRIVATE, {
        name: Routes.HOME,
      });
    } catch ({ message }) {
      showError('Usuário inválido');
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    user.clearUser();
  }, []);

  return (
    <FormContainer
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange={false}
    >
      <Login
        handleNavigate={handleNavigate}
        passwordMask={passwordMask}
        togglePasswordMask={togglePasswordMask}
        getIconName={getIconName}
      />
    </FormContainer>
  );
};

export default observer(LoginContainer);
