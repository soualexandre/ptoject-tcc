import * as React from 'react';
import { FormBehavior } from '~/modules';

type Props = {
  validationSchema: any;
  initialValues: Record<string, unknown>;
  onSubmit(values: any, actions: any): any;
  validateOnChange?: boolean;
  enableReinitialize?: boolean;
};

const FormContainer: React.FC<Props> = ({
  validationSchema,
  initialValues,
  onSubmit,
  children,
  ...props
}) => (
  <FormBehavior
    {...props}
    validationSchema={validationSchema}
    initialValues={initialValues}
    onSubmit={onSubmit}
  >
    {children}
  </FormBehavior>
);

export default FormContainer;
