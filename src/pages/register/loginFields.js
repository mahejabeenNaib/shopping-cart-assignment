import TextInput from '../../components/TextInput';

export const requiredValidate = (value) => {
  if (!value) {
    return 'Required....';
  }
  return '';
};

export const compareValidate = (value, compareValue) => {
  if (value !== compareValue) {
    return 'not matched...';
  }
  return '';
};

export const loginInitValues = {
  email: '',
  password: '',
};

export const loginFields = [
  {
    component: TextInput,
    name: 'firstname',
    autoComplete: 'firstname',
    label: 'First Name',
    placeholder : 'Enter the first name',
    // validate: requiredValidate,
    type: 'text',
  },
  {
    component: TextInput,
    name: 'lastname',
    autoComplete: 'lastname',
    label: 'Last Name',
    placeholder : 'Enter the Last Name',
    // validate: requiredValidate,
    type: 'text',
  },
  {
    component: TextInput,
    name: 'email',
    autoComplete: 'email',
    label: 'Email',
    placeholder : 'Enter the email',
    // validate: requiredValidate,
    type: 'email',
  },
  {
    component: TextInput,
    name: 'password',
    autoComplete: 'current-password',
    label: 'Password',
    type: 'password',
    placeholder : 'Enter the password',
    // validate: requiredValidate,
  },
  {
    component: TextInput,
    name: 'confirmPassword',
    autoComplete: 'confirm-password',
    label: 'Confirm Password',
    type: 'password',
    placeholder : 'Enter the password',
    // validate: requiredValidate,
  },
];
