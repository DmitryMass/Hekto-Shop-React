import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//
import phone from '../../Assets/icons/phoneLogo.svg';
import likeLogo from '../../Assets/icons/likeLogo.svg';
import cartLogo from '../../Assets/icons/cart-logo.svg';
import login from '../../Assets/icons/userLogo.svg';
//
import { LogoutOutlined, AuditOutlined } from '@ant-design/icons';
//
import './over-header.scss';
//
import { ADMIN_ROUTE, ROUTES } from '../Constant/constant';
import Modal from '../Modal/component';

//
// { userInfo, logOutUser } props
const OverHeader = ({ userInfo, logoutUser }) => {
  const [modal, setModal] = useState(false);

  const toggleSetModal = () => {
    setModal((prevState) => !prevState);
  };

  return (
    <div className="overHeader">
      <div className="container overHeader__flex">
        <div className="user">
          {userInfo ? (
            <Link
              to={userInfo.role === 'ADMIN' ? ADMIN_ROUTE : ROUTES.PERSONAL}
              className="user__name"
            >
              {userInfo.email}
              {<AuditOutlined />}
            </Link>
          ) : (
            <div className="user__contact">
              <object data={phone} type="" />
              <p className="user__phone">(12345)5432</p>
            </div>
          )}
        </div>
        <div className="user__interface">
          <div className="link__wrapper">
            {userInfo ? (
              <button className="user__logout" onClick={logoutUser}>
                Logout {<LogoutOutlined />}
              </button>
            ) : (
              <Link to={ROUTES.LOGIN} className="user__panel">
                Login
                <object data={login} type=""></object>
              </Link>
            )}
          </div>
          <div className="link__wrapper">
            {userInfo ? (
              <Link to={ROUTES.WISHLIST} className="user__wishlist">
                Wishlist <object data={likeLogo} type="" />
              </Link>
            ) : (
              <div onClick={toggleSetModal} className="user__wishlist">
                Wishlist <object data={likeLogo} type="" />
              </div>
            )}
          </div>
          <div className="link__wrapper">
            {userInfo ? (
              <Link to={ROUTES.CART} className="user__cart">
                <object data={cartLogo} type="" />
              </Link>
            ) : (
              <div onClick={toggleSetModal} className="user__cart">
                <object data={cartLogo} type="" />
              </div>
            )}
          </div>
        </div>
      </div>
      {modal ? <Modal setModal={setModal} /> : null}
    </div>
  );
};

export default OverHeader;
