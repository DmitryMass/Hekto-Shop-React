import React, { useState } from 'react';
import './input.scss';
//
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
//

const Input = ({ field: { onChange, onBlur, name, value }, form, type }) => {
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
  } else if (type === 'email') {
    placeholders = 'Email';
  } else {
    placeholders = 'Enter your name';
  }
  return (
    <>
      <div className="input">
        <input
          placeholder={placeholders}
          onChange={onChange}
          onBlur={onBlur}
          type={stateType}
          name={name}
          value={value}
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
      </div>
      {error && <div className="input__error">{form.errors[name]}</div>}
    </>
  );
};

export default Input;
