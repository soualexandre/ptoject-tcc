import React, { FC, useState } from 'react';
import { observer } from 'mobx-react';
import { FormContainer } from '~/components';
import { navigate } from '~/navigation/actions';
import { Routes } from '~/navigation/routes';
import { useStores } from '~/utils';
import { FormInfoPerson } from './formValues';
import InfoPerson from './InfoPerson';
import { validationSchema } from './validationSchema';

const InfoPersonContainer: FC = () => {
  const [logo, setLogo] = useState('');
  const { user } = useStores();
  const initialValues = {
    name: user.userAuth.name || '',
    document: user.userAuth.document || '',
    find_us: user.userAuth.find_us || '',
  };

  const onSubmit = (values: FormInfoPerson): void => {
    const infoPerson = { ...values, logo };
    user.setUserAuthIndividual(infoPerson);
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
      <InfoPerson onPressImage={onPressImage} />
    </FormContainer>
  );
};

export default observer(InfoPersonContainer);
