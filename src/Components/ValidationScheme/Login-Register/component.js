import * as yup from 'yup';

export const validationRegister = yup.object().shape({
  username: yup.string().min(4).max(15).required(),
  email: yup.string().min(4).max(30).email().required(),
  password: yup.string().min(4).max(20).required(),
});

export const validationLogin = yup.object().shape({
  email: yup.string().min(4).max(30).email().required(),
  password: yup.string().min(4).max(20).required(),
});
