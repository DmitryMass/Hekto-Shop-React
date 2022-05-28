import React from 'react';
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
// { userInfo, logOutUser } props
const OverHeader = ({ userInfo, logoutUser }) => {
  return (
    <div className="overHeader">
      <div className="container overHeader__flex">
        <div className="user">
          {userInfo ? (
            <Link to="/personal" className="user__name">
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
              <Link className="user__panel" to="/login">
                Login
                <object data={login} type=""></object>
              </Link>
            )}
          </div>
          <div className="link__wrapper">
            <Link className="user__wishlist" to="/wishlist">
              Wishlist <object data={likeLogo} type="" />
            </Link>
          </div>
          <div className="link__wrapper">
            <Link className="user__cart" to="/usercart">
              <object data={cartLogo} type="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverHeader;
