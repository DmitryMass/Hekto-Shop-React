import React from 'react';
import OverHeader from '../Overheader/component';
import HeaderMenu from './HeaderMenu/component';
//
//

//

// { userInfo, logOutUser } props header
const Header = ({ userInfo, logoutUser }) => {
  return (
    <header className="header">
      <OverHeader userInfo={userInfo} logoutUser={logoutUser} />
      {/* userInfo={userInfo} logOutUser={logOutUser}  props overhead */}
      <HeaderMenu />
    </header>
  );
};

export default Header;
