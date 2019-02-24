import React, { useCallback } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { formValidations } from '../../../utils/form-validations';
import styles from './styles.css';
import { profilePath } from '../../../utils/paths';
import { setAuthenticationToken } from '../../../utils/authentication-token';

export const text = {
  button: 'Submit',
  emailPlaceholder: 'Email...',
  passwordPlaceholder: 'Password...',
};

const initialValues = { email: '', password: '' };

export const LogInPageFormBase = ({ onSubmit }) => (
  <Formik initialValues={initialValues} onSubmit={onSubmit}>
    {({ isSubmitting }) => (
      <Form>
        <Field
          className={styles.field}
          name="email"
          placeholder={text.emailPlaceholder}
          type="email"
          validate={formValidations.required}
        />
        <ErrorMessage name="email" component="div" />
        <Field
          className={styles.field}
          name="password"
          placeholder={text.passwordPlaceholder}
          type="password"
          validate={formValidations.required}
        />
        <ErrorMessage name="password" component="div" />
        <button type="submit" disabled={isSubmitting}>
          {text.button}
        </button>
      </Form>
    )}
  </Formik>
);

export const LogInPageForm = ({ authenticate, history }) => {
  const onSubmit = useCallback(async () => {
    await authenticate();
    setAuthenticationToken('fake-token');
    history.push(profilePath);
  }, [authenticate, history]);

  return <LogInPageFormBase onSubmit={onSubmit} />;
};
