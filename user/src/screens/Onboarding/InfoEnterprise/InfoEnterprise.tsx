import React from 'react';
import { FormikProps, useFormikContext } from 'formik';
import { UploadLogo } from '~/components';
import { strings } from '~/locale';
import { isEmpty } from '~/modules';
import { useAlerts } from '~/utils';
import { FormInfoEnterprise } from './formValues';
import { ButtonContinue, FormWrapper, Input, Wrapper } from './styles';

type Props = {
  onPressImage(img: ImagePickerType): void;
};
const InfoEnterprise: React.FC<Props> = ({ onPressImage }) => {
  const {
    submitForm,
    values,
    errors,
    handleChange,
    validateForm,
  }: FormikProps<FormInfoEnterprise> = useFormikContext();

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
      hasScroll={false}
    >
      <FormWrapper>
        <Input
          label={strings('infoAccount.corporateName')}
          value={values.corporate_name}
          error={errors.corporate_name}
          onChangeText={handleChange('corporate_name')}
          autoCapitalize="sentences"
        />
        <Input
          label={strings('infoAccount.fantasyName')}
          value={values.fantasy_name}
          error={errors.fantasy_name}
          onChangeText={handleChange('fantasy_name')}
          autoCapitalize="sentences"
        />
        <Input
          label={strings('infoAccount.businessDocument')}
          value={values.business_document}
          error={errors.business_document}
          onChangeText={handleChange('business_document')}
        />
        <Input
          label={strings('infoAccount.responsible')}
          value={values.responsible}
          error={errors.responsible}
          onChangeText={handleChange('responsible')}
          autoCapitalize="sentences"
        />
        <Input
          label={strings('infoAccount.position')}
          value={values.position}
          error={errors.position}
          onChangeText={handleChange('position')}
          autoCapitalize="sentences"
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

export default InfoEnterprise;
