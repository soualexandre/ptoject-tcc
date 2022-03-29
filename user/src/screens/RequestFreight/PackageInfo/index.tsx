import React from 'react';
import { FormContainer } from '~/components';
import { FormikHelpers } from '~/modules';
import { NavigationActions, Routes } from '~/navigation';
import { useStores } from '~/utils';
import { FormCollectionPoint, initialValues } from './formValues';
import PackInfo from './PackInfo';
import { validationSchema } from './validationSchema';

const PackInfoContainer: React.FC = () => {
  const { request } = useStores();

  const onSubmit = (values: FormCollectionPoint): void => {
    const data = {
      description: 'description',
      ...values,
    };

    request.constructionRequest(data);

    NavigationActions.navigate(Routes.POINT);
  };

  const handleNavigation = () => {
    NavigationActions.goBack();
  };

  return (
    <FormContainer
      enableReinitialize
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange={false}
    >
      <PackInfo handleNavigation={handleNavigation} />
    </FormContainer>
  );
};

export default PackInfoContainer;
