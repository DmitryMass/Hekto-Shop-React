import React from 'react';
import { Field, Form, Formik } from 'formik';
import MainLogo from '../../MainLogo/component';
import Input from '../../Input/component';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../Constant/constant';
import {
  categories,
  customerCare,
  pages,
} from '../../../Data/FooterData/component';
import { nanoid } from 'nanoid';

const FooterInfo = () => {
  return (
    <div className="footer__info">
      <div className="container footer__flex">
        <div className="footer__signUp">
          <MainLogo />
          <Formik
            initialValues={{ email: '' }}
            onSubmit={async (values, { resetForm, setFieldError }) => {
              const formData = new FormData();
              Object.entries(values).forEach((item) => {
                formData.append(item[0]);
              });
            }}
          >
            <Form>
              <div className="form__sign">
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter Email Adress"
                  location="footer"
                  component={Input}
                />
              </div>
            </Form>
          </Formik>
          <Link className="footer__contact footer__text" to={ROUTES.CONTACT}>
            Contact Info
          </Link>
          <p className="footer__address footer__text">
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>
        <div className="footer__categories">
          <h5 className="h5 footer__title">Categories</h5>
          <ul>
            {categories.map((item) => (
              <li className="footer__li" key={nanoid()}>
                <Link className="footer__text" to={item.link}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__customer">
          <h5 className="h5 footer__title">Customer Care</h5>
          <ul>
            {customerCare.map((item) => (
              <li className="footer__li" key={nanoid()}>
                <Link className="footer__text" to={item.link}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__pages">
          <h5 className="h5 footer__title">Pages</h5>
          <ul>
            {pages.map((item) => (
              <li className="footer__li" key={nanoid()}>
                <Link className="footer__text" to={item.link}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;
