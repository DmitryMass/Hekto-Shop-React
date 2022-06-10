import React from 'react';
import { ROUTES } from '../../Constant/constant';
import { Link } from 'react-router-dom';
//
import facebookLogo from '../../../Assets/icons/facebookLogo.svg';
import instagrammLogo from '../../../Assets/icons/instagrammLogo.svg';
import twitterLogo from '../../../Assets/icons/twitterLogo.svg';
//
const FooterMessengers = () => {
  return (
    <div className="footer__messengers">
      <div className="container__footer footer__flex">
        <div className="footer__rights">
          <Link to={ROUTES.RIGHT} className="footer__text">
            ©Webecy - All Rights Reserved
          </Link>
        </div>
        <div className="messenger">
          <div className="messenger__facebook">
            <a
              className="logo messenger__logo"
              href={ROUTES.FACEBOOK}
              target="_blank"
            >
              <object data={facebookLogo} type=""></object>
            </a>
          </div>
          <div className="messenger__instagramm">
            <a
              className="logo messenger__logo"
              href={ROUTES.INSTAGRAMM}
              target="_blank"
            >
              <object data={instagrammLogo} type=""></object>
            </a>
          </div>
          <div className="messenger__twitter">
            <a
              className="logo messenger__logo"
              href={ROUTES.TWITTER}
              target="_blank"
            >
              <object data={twitterLogo} type=""></object>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMessengers;
