import React from 'react';
import { FormikProps, useFormikContext } from 'formik';
import { UploadLogo } from '~/components';
import { strings } from '~/locale';
import { isEmpty } from '~/modules';
import { getDocumentMask, useAlerts } from '~/utils';
import { FormInfoPerson } from './formValues';
import { ButtonContinue, FormWrapper, Input, Wrapper } from './styles';

type Props = {
  onPressImage(img: ImagePickerType): void;
};

const InfoPerson: React.FC<Props> = ({ onPressImage }) => {
  const {
    submitForm,
    values,
    errors,
    handleChange,
    validateForm,
  }: FormikProps<FormInfoPerson> = useFormikContext();

  const { showError } = useAlerts();

  const handleSubmit = async () => {
    const fields = await validateForm();

    if (isEmpty(fields)) {
      return submitForm();
    }
    showError(strings('error.unknow'));
  };

  return (
    <Wrapper
      title={strings('infoAccount.title')}
      description={strings('infoAccount.description')}
      isOnBoardingHeader
      isArrowButton
      hasScroll={false}
    >
      <FormWrapper>
        <Input
          label={strings('infoAccount.name')}
          value={values.name}
          error={errors.name}
          onChangeText={handleChange('name')}
          autoCapitalize="words"
        />
        <Input
          label={strings('infoAccount.document')}
          value={values.document}
          type={getDocumentMask()}
          error={errors.document}
          onChangeText={handleChange('document')}
        />
        {/* <Input
          label={strings('infoAccount.findUs')}
          value={values.findUs}
          error={errors.findUs}
          onChangeText={handleChange('findUs')}
        /> */}

        <UploadLogo handleImage={onPressImage} />
      </FormWrapper>
      <ButtonContinue onPress={handleSubmit}>
        {strings('general.next')}
      </ButtonContinue>
    </Wrapper>
  );
};

export default InfoPerson;
