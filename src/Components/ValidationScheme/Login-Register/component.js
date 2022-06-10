import * as yup from 'yup';

export const validationRegister = yup.object().shape({
  username: yup.string().label('Username').min(4).max(15).required(),
  email: yup.string().label('Email').min(4).max(30).email().required(),
  password: yup.string().label('Password').min(4).max(20).required(),
});

export const validationLogin = yup.object().shape({
  email: yup.string().label('Email').min(4).max(30).email().required(),
  password: yup.string().label('Password').min(4).max(20).required(),
});
