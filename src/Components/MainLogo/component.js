import React from 'react';
import { Link } from 'react-router-dom';
//
import { ROUTES } from '../Constant/constant';
//
import Logo from '../../Assets/icons/hekto-logo.svg';
//
import './logo.scss';
//

const MainLogo = () => {
  return (
    <Link to={ROUTES.HOME} className="logo">
      <object data={Logo} type="" />
    </Link>
  );
};

export default MainLogo;
