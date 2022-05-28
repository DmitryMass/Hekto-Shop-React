import React from 'react';
//
import DropDown from '../DropDown/component';
//
import './header-menu.scss';
//
import { Link } from 'react-router-dom';
//
import Logo from '../../../Assets/icons/hekto-logo.svg';

const HeaderMenu = () => {
  return (
    <div className="header__menu">
      <div className="container header__flex">
        <div className="header__panel">
          <div className="header__logo">
            <Link className="header__homeLogo" to="/">
              <object data={Logo} type="" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__list">
              <li>
                <DropDown />
              </li>
              <li>
                <Link className="header__list-item" to="/pages">
                  Pages
                </Link>
              </li>
              <li>
                <Link className="header__list-item" to="/products">
                  Products
                </Link>
              </li>
              <li>
                <Link className="header__list-item" to="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="header__list-item" to="/shop">
                  Shop
                </Link>
              </li>
              <li>
                <Link className="header__list-item" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="search__panel">Search</div>
      </div>
    </div>
  );
};

export default HeaderMenu;
