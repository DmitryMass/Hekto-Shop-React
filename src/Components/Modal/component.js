import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../Constant/constant';

import './modal.scss';
const Modal = ({ setModal }) => {
  const closeModal = () => {
    setModal((prevState) => !prevState);
  };
  return (
    <div className="modal__window">
      <Link
        className="modal__registration"
        onClick={closeModal}
        to={ROUTES.REGISTER}
      >
        Зарегистрируйтесь
      </Link>
      <button className="modal__btn" onClick={closeModal}>
        OK
      </button>
    </div>
  );
};

export default Modal;
