import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string()
    .max(150, "Full name can't be more than 150 characters.")
    .required('Full name is required.'),
  email: Yup.string()
    .email('Please insert a valid e-mail')
    .max(100, "E-mail can't be more than 100 characters.")
    .required('E-mail is required.'),
  password: Yup.string()
    .min(6, 'Password needs a minimum of 6 characters')
    .required('Password is required.'),
});
