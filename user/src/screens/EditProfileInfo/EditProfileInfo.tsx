import React, { FC } from 'react';
import { If, UploadLogo } from '~/components';
import { strings } from '~/locale';
import { FormikProps, useFormikContext } from '~/modules';
import { USER_TYPE, getPhoneMask } from '~/utils';
import { FormEditProfileInfo } from './formValues';
import { ButtonSave, FormWrapper, Input, Wrapper } from './styles';

type Props = {
  onGoBack(): void;
  userProfile: UserProfile;
  onPressImage(img: ImagePickerType): void;
  userType: number;
};

const EditProfileInfo: FC<Props> = ({
  onGoBack,
  userProfile,
  onPressImage,
  userType,
}) => {
  const {
    submitForm,
    values,
    errors,
    handleChange,
    isSubmitting,
  }: FormikProps<FormEditProfileInfo> = useFormikContext();

  const isUserIndividual = userType === USER_TYPE.INDIVIDUAL;
  const isUserBusiness = userType === USER_TYPE.BUSINESS;

  return (
    <Wrapper
      title={strings('infoAccount.title')}
      fullWidth
      isMainSimpleHeader
      bounces={false}
      onBackButtonPress={onGoBack}
    >
      <FormWrapper>
        <Input
          label={strings('infoAccount.email')}
          value={userProfile.user.email}
          editable={false}
        />
        <Input
          label={strings('infoAccount.phone')}
          options={getPhoneMask()}
          value={values.phone}
          error={errors.phone}
          keyboardType="phone-pad"
          onChangeText={handleChange('phone')}
        />
        <If condition={isUserIndividual}>
          <>
            <Input
              label={strings('infoAccount.userName')}
              value={values.name}
              error={errors.name}
              onChangeText={handleChange('name')}
              autoCapitalize="sentences"
            />
            <Input
              label={strings('infoAccount.document')}
              value={values.document}
              error={errors.document}
              keyboardType="numeric"
              onChangeText={handleChange('document')}
            />
          </>
        </If>

        <If condition={isUserBusiness}>
          <>
            <Input
              label={strings('infoAccount.corporateName')}
              value={values.social_reason}
              error={errors.social_reason}
              onChangeText={handleChange('social_reason')}
              autoCapitalize="sentences"
            />
            <Input
              label={strings('infoAccount.fantasyName')}
              value={values.name}
              error={errors.name}
              onChangeText={handleChange('name')}
              autoCapitalize="sentences"
            />
            <Input
              label={strings('infoAccount.businessDocument')}
              value={values.document}
              error={errors.document}
              keyboardType="numeric"
              onChangeText={handleChange('document')}
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
              value={values.responsible_position}
              error={errors.responsible_position}
              onChangeText={handleChange('responsible_position')}
            />
          </>
        </If>

        <UploadLogo
          handleImage={onPressImage}
          title={strings('infoAccount.logo')}
        />
      </FormWrapper>
      <ButtonSave onPress={submitForm} isLoading={isSubmitting}>
        {strings('general.save')}
      </ButtonSave>
    </Wrapper>
  );
};

export default EditProfileInfo;
