import React from 'react';
import { Formik, Form, FormikValues, FormikHelpers } from 'formik';

interface CustomFormProps {
  initialValues: FormikValues;
  onSubmit: (values: FormikValues, actions: FormikHelpers<FormikValues>) => void;
  validationSchema: object
  children: React.ReactNode;
}

const CustomForm = ({ initialValues, onSubmit, validationSchema, children }: CustomFormProps) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        {children}
      </Form>
    </Formik>
  );
};

export default CustomForm;
