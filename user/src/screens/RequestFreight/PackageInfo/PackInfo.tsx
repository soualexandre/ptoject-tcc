import React from 'react';
import { strings } from '~/locale';
import { FormikProps, useFormikContext } from '~/modules';
import { FormCollectionPoint } from './formValues';
import { Container, Drop, Input, Next, Wrapper } from './styles';

type Props = {
  handleNavigation(): void;
};

const PackInfo: React.FC<Props> = ({ handleNavigation }) => {
  const {
    submitForm,
    values,
    errors,
    handleChange,
    setValues,
  }: FormikProps<FormCollectionPoint> = useFormikContext();

  const handleSubmit = (): void => {
    submitForm();
  };

  const valueTotal = +values.unit_weight * +values.quantity;
  return (
    <Wrapper
      onBackButtonPress={handleNavigation}
      title={strings('packInfo.titleScreen')}
      fullWidth
      isMainSimpleHeader
    >
      <Container>
        <Input
          error={errors.packaging}
          value={values.packaging}
          onChangeText={handleChange('packaging')}
          label={strings('packInfo.inputLabel')}
          autoCapitalize="sentences"
        />
        <Drop
          error={errors.length}
          value={values.length}
          label={strings('packInfo.DropLength')}
          onChangeText={handleChange('length')}
          type="only-numbers"
        />
        <Drop
          error={errors.width}
          value={values.width}
          label={strings('packInfo.DropWidth')}
          onChangeText={handleChange('width')}
          type="only-numbers"
        />
        <Drop
          error={errors.height}
          value={values.height}
          label={strings('packInfo.DropHeight')}
          onChangeText={handleChange('height')}
          type="only-numbers"
        />
        <Drop
          error={errors.quantity}
          value={values.quantity}
          label={strings('packInfo.DropAmount')}
          onChangeText={handleChange('quantity')}
          type="only-numbers"
        />
        <Drop
          error={errors.unit_weight}
          value={values.unit_weight}
          label={strings('packInfo.DropUntary')}
          onChangeText={handleChange('unit_weight')}
          onEndEditing={() =>
            setValues({ ...values, total: valueTotal.toString() })
          }
          type="only-numbers"
        />
        <Drop
          error={errors.total}
          value={values.total}
          label={strings('packInfo.DropTotal')}
          onChangeText={handleChange('total')}
          editable={false}
        />
        <Next onPress={handleSubmit}>{strings('packInfo.button')}</Next>
      </Container>
    </Wrapper>
  );
};
export default PackInfo;
