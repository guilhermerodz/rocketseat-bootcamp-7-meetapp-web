import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .email('Please insert a valid e-mail')
    .required('E-mail is required.'),
  password: Yup.string().required('Password is required.'),
});
