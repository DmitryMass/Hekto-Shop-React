import React from 'react';
import Header from './Header/component';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from '../Pages/Login/component';
import RegisterPage from '../Pages/Register/component';
import Home from '../Pages/HomePage/component';
import User from '../Pages/User/component';
import Admin from '../Pages/Admin/component';
//
import { useState, useEffect } from 'react';
import { ADMIN_ROUTE, ROUTES } from './Constant/constant';
import Footer from './Footer/component';

const App = () => {
  const [userInfo, setUserInfo] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.userInfo && JSON.parse(localStorage.userInfo);
    if (userInfo) {
      setUserInfo(userInfo);
    }
  }, [localStorage, setUserInfo]);

  // logout user
  const logoutUser = () => {
    setUserInfo(null);
    delete localStorage.userInfo;
    navigate(ROUTES.HOME);
  };
  // user after logins

  return (
    <>
      <div className="app">
        <Header userInfo={userInfo} logoutUser={logoutUser} />
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route
            path={ROUTES.REGISTER}
            element={
              userInfo ? <Navigate to={ROUTES.HOME} /> : <RegisterPage />
            }
          />
          <Route
            path={ROUTES.LOGIN}
            element={
              userInfo ? (
                <Navigate to={ROUTES.HOME} />
              ) : (
                <LoginPage setUserInfo={setUserInfo} />
              )
            }
          />
          <Route path={ROUTES.PERSONAL} element={<User />} />
          <Route path={ADMIN_ROUTE} element={<Admin />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
