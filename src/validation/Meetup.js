import * as Yup from 'yup';

export default Yup.object().shape({
  banner_id: Yup.number()
    .transform(value => (!value ? undefined : value))
    .required('Banner is required'),
  title: Yup.string()
    .min(6, 'Title needs a minimum of 6 characters')
    .max(30, "Title can't be more than 30 characters.")
    .required('Title is required.'),
  description: Yup.string()
    .max(255, "Descrption can't be more than 255 characters.")
    .required('Description is required.'),
  location: Yup.string()
    .min(6, 'Location needs a minimum of 6 characters')
    .max(100, "Location can't be more than 100 characters.")
    .required('Location is required.'),
  date: Yup.date().required('Date is required.'),
});
