import React from 'react';
import { Link } from 'react-router-dom';
//
import { Field, Form, Formik } from 'formik';
//
import { validationRegister } from '../../Components/ValidationScheme/Login-Register/component';
import Input from '../../Components/Input/component';
import { ROUTES } from '../../Components/Constant/constant';
import { registerUser } from '../../Api/Reg-Login-Api/component';
//
import '../Login/login.scss';
//

const RegisterPage = () => {
  return (
    <div className="register">
      <div className="container">
        <div className="register__window">
          <h4 className="h4 register__title">Register</h4>
          <p className="register__subtitle">
            Please register using account detail bellow.
          </p>
          <Formik
            initialValues={{ username: '', email: '', password: '' }}
            onSubmit={async (values, { resetForm, setFieldError }) => {
              //resetfrom & setfieldErro from (formikHelpers)
              const formData = new FormData();

              Object.entries(values).forEach((item) => {
                formData.append(item[0], item[1]);
              });
              try {
                await registerUser(formData);
                resetForm();
                location.pathname = '/login';
              } catch (error) {
                setFieldError(error.message.name, error.message.info);
              }
            }}
            validationSchema={validationRegister}
          >
            <Form>
              <div className="register__form">
                <Field name="username" component={Input} />
                <Field
                  placeholder="Email Adress"
                  name="email"
                  type="email"
                  component={Input}
                />
                <Field
                  placeholder="Password"
                  name="password"
                  type="password"
                  component={Input}
                />
                <button className="register__btn" type="submit">
                  Register
                </button>
                <div className="register__info">
                  By registering, you agree to the
                  <Link to={ROUTES.AGREEMENT}> user agreement</Link>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
