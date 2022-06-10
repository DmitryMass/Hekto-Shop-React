import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
//
import { Field, Form, Formik } from 'formik';
//
import { validationLogin } from '../../Components/ValidationScheme/Login-Register/component';
import { loginUser } from '../../Api/Reg-Login-Api/component';
import Input from '../../Components/Input/component';
import { ADMIN_ROUTE, ROUTES } from '../../Components/Constant/constant';

//
//
import './login.scss';
//
//
//
const LoginPage = ({ setUserInfo }) => {
  let navigate = useNavigate();
  return (
    <div className="login">
      <div className="container">
        <div className="login__window">
          <h4 className="h4 login__title">Login</h4>
          <p className="login__subtitle">
            Please login using account detail bellow.
          </p>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={async (values, { resetForm, setFieldError }) => {
              //resetfrom & setfieldErro from (formikHelpers)
              const formData = new FormData();
              Object.entries(values).forEach((item) => {
                formData.append(item[0], item[1]);
              });

              try {
                const userInfo = await loginUser(formData);
                resetForm();
                setUserInfo(userInfo);
                if (userInfo.role === 'ADMIN') {
                  navigate(ADMIN_ROUTE);
                } else {
                  navigate(ROUTES.HOME);
                }
                localStorage.userInfo = JSON.stringify(userInfo);
              } catch (error) {
                setFieldError(error.message.name, error.message.info);
              }
            }}
            validationSchema={validationLogin}
          >
            <Form>
              <div className="login__form">
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
                <Link to={ROUTES.FORGOTPASSWORD}>Forgot your password?</Link>
                <button className="login__btn" type="submit">
                  Sign in
                </button>
              </div>
            </Form>
          </Formik>
          <div className="login__register">
            <Link to={ROUTES.REGISTER}>
              Don’t have an Account? Create account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
