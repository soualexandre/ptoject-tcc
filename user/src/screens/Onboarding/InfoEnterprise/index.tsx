import React, { FC, useState } from 'react';
import { observer } from 'mobx-react';
import { FormContainer } from '~/components';
import { navigate } from '~/navigation/actions';
import { Routes } from '~/navigation/routes';
import { useStores } from '~/utils';
import { FormInfoEnterprise } from './formValues';
import InfoEnterprise from './InfoEnterprise';
import { validationSchema } from './validationSchema';

const InfoEnterpriseContainer: FC = () => {
  const [logo, setLogo] = useState('');
  const { user } = useStores();
  const initialValues = {
    corporate_name: user.userAuthBusiness.corporate_name || '',
    fantasy_name: user.userAuthBusiness.fantasy_name || '',
    business_document: user.userAuthBusiness.business_document || '',
    responsible: user.userAuthBusiness.responsible || '',
    position: user.userAuthBusiness.position || '',
  };

  const onSubmit = (values: FormInfoEnterprise): void => {
    const infoBusiness = { ...values, logo };
    user.setUserAuthBusiness(infoBusiness);
    navigate(Routes.ONBOARDING_ADDRESS);
  };

  const onPressImage = (image: ImagePickerType): void => {
    const imageLogo = image.uri;
    const imageFileSize = image.fileSize;
    const imageSize = 2500000;

    if (imageLogo && imageFileSize && imageFileSize <= imageSize) {
      setLogo(imageLogo);
      user.setUserLogo(imageLogo);
    }
  };

  return (
    <FormContainer
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange={false}
    >
      <InfoEnterprise onPressImage={onPressImage} />
    </FormContainer>
  );
};

export default observer(InfoEnterpriseContainer);
