import React, { useState } from 'react';
import './input.scss';
//
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
//

const Input = ({
  field: { onChange, onBlur, name, value },
  form,
  type,
  location,
}) => {
  const error = form.errors[name] && form.touched[name];
  const [stateType, setStateType] = useState(type);

  const handleShow = () => {
    setStateType((prevStateType) => {
      if (prevStateType === 'password') return 'text';
      if (prevStateType === 'text') return 'password';
    });
  };
  let placeholders;
  if (type === 'password') {
    placeholders = 'Password';
  } else if (type === 'email' && !location) {
    placeholders = 'Enter Email';
  } else if (type === 'email' && location === 'footer') {
    placeholders = 'Enter Email Adress';
  } else {
    placeholders = 'Enter your name';
  }

  let className;
  if (location === 'footer') {
    className = 'footer__input';
  } else {
    className = 'input';
  }
  return (
    <>
      <div className={className}>
        <input
          placeholder={placeholders}
          onChange={onChange}
          onBlur={onBlur}
          type={stateType}
          name={name}
          value={value}
          location={location}
          className={error ? 'input__break' : 'input__normal'}
        />
        {type === 'password' && (
          <button className="input__check" type="button" onClick={handleShow}>
            {stateType === 'password' ? (
              <EyeOutlined />
            ) : (
              <EyeInvisibleOutlined />
            )}
          </button>
        )}
        {location === 'footer' && (
          <button className="footer__btn" type="submit">
            Sign Up
          </button>
        )}
      </div>
      {error && <div className="input__error">{form.errors[name]}</div>}
    </>
  );
};

export default Input;
