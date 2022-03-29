import React, { FC } from 'react';
import { FormContainer } from '~/components';
import { strings } from '~/locale';
import { FormikHelpers, observer } from '~/modules';
import { NavigationActions, Routes } from '~/navigation';
import { navigate } from '~/navigation/actions';
import { useAlerts, useStores } from '~/utils';
import EditProfileInfo from './EditProfileInfo';
import { FormEditProfileInfo } from './formValues';
import { validationSchema } from './validationSchema';

const EditProfileInfoContainer: FC = () => {
  const { showError, showSuccess } = useAlerts();
  const { user } = useStores();
  const { userProfile } = user;
  const { userType } = user;

  const initialValues = {
    phone: userProfile.institution.phone || '',
    social_reason: userProfile.institution.social_reason || '',
    name: userProfile.user.name || '',
    document: userProfile.institution.document || '',
    responsible: userProfile.institution.responsible || '',
    responsible_position: userProfile.institution.responsible_position || '',
  };

  const onSubmit = async (
    values: FormEditProfileInfo,
    { setSubmitting }: FormikHelpers<FormEditProfileInfo>,
  ): Promise<void> => {
    const infoPerson = { ...values };

    try {
      setSubmitting(true);
      await user.profileInfoUpdate(infoPerson);
      showSuccess(strings('general.editingSuccess'));
      navigate(Routes.EDIT_PROFILE);
    } catch ({ message }) {
      showError(message);
    } finally {
      setSubmitting(false);
    }
  };

  const onPressImage = (image: ImagePickerType): void => {
    const imageLogo = image.uri;
    const imageFileSize = image.fileSize;
    const imageSize = 2500000;

    if (imageLogo && imageFileSize && imageFileSize <= imageSize) {
      user.setUserLogo(imageLogo);
    }
  };

  const goBack = () => {
    NavigationActions.goBack();
  };
  return (
    <FormContainer
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange={false}
    >
      <EditProfileInfo
        onGoBack={goBack}
        userProfile={userProfile}
        onPressImage={onPressImage}
        userType={userType}
      />
    </FormContainer>
  );
};

export default observer(EditProfileInfoContainer);
