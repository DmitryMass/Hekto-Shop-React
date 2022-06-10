import React from 'react';
import FooterInfo from './Footer-Info/component';
import FooterMessengers from './Footer-Messengers/component';
//
import './footer.scss';
//
const Footer = () => {
  return (
    <footer className="footer">
      <FooterInfo />
      <FooterMessengers />
    </footer>
  );
};

export default Footer;
