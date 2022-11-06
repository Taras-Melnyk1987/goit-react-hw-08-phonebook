import TextField from '@mui/material/TextField';
import { Field, ErrorMessage } from 'formik';
import { FormField, Error } from '../Form.styled';

const FormikField = ({ type = 'text', label, name }) => {
  return (
    <FormField>
      <Field
        as={TextField}
        variant="outlined"
        type={type}
        label={label}
        name={name}
        required
        fullWidth
        helperText={<ErrorMessage name={name} component={Error} />}
      />
    </FormField>
  );
};

export default FormikField;
