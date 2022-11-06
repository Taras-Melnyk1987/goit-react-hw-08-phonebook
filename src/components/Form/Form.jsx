import React from 'react';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import toast from 'react-hot-toast';
import * as contactsOperations from 'redux/contacts/contactsOperations';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import FormikField from './FormikField';

const nameRegEx = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(nameRegEx, 'The name must contain only characters')
    .required('Required'),
  number: yup.string().length(10, 'Must be 10 digits').required('Required'),
});

const AppForm = ({ contacts }) => {
  const dispatch = useDispatch();

  const checkUniqueName = newName => {
    const normalyzeName = newName.toLocaleLowerCase();
    return contacts.find(
      ({ name }) =>
        name.toLocaleLowerCase() === normalyzeName.toLocaleLowerCase()
    );
  };

  const checkUniqueNumber = newNumber => {
    return contacts.find(({ number }) => number === newNumber);
  };

  const phoneFormatting = number => {
    const array = [...number];
    for (let i = 3; i < array.length - 1; i += 4) {
      array.splice(i, 0, '-');
    }
    return array.join('');
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    const { name, number } = values;
    const newName = checkUniqueName(name);
    const formatedPhone = phoneFormatting(number);
    const newNumber = checkUniqueNumber(formatedPhone);

    if (newName) {
      toast.error(`Name ${name} is already in contacts`);
      return;
    }

    if (newNumber) {
      toast.error(`Number ${number} is already in contacts`);
      return;
    }

    dispatch(contactsOperations.addContact({ name, number: formatedPhone }));
    toast.success(`${values.name} was added to contacts!`);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ dirty, isValid }) => (
        <Form>
          <FormikField type="text" name="name" label="Contact Name" />
          <FormikField type="tel" name="number" label="Contact phone number" />

          <Button
            type="submit"
            variant="contained"
            disabled={!dirty || !isValid}
            sx={{ mt: 3, mb: 2, color: 'white' }}
          >
            Add Contact
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AppForm;
