import React from 'react';
import { Link } from 'react-router-dom';
//
import DropDown from '../DropDown/component';
import MainLogo from '../../MainLogo/component';
//
import './header-menu.scss';
//
import { mainHeaderLinks } from '../../../Data/HeaderData/headerData';
//
import { nanoid } from 'nanoid';

const HeaderMenu = () => {
  return (
    <div className="header__menu">
      <div className="container header__flex">
        <div className="header__panel">
          <div className="header__logo">
            <MainLogo />
          </div>
          <nav className="header__nav">
            <ul className="header__list">
              <li>
                <DropDown />
              </li>
              {mainHeaderLinks.map((item) => {
                return (
                  <li key={nanoid()}>
                    <Link className="header__list-item" to={item.link}>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="search__panel">Search</div>
      </div>
    </div>
  );
};

export default HeaderMenu;
