import React from 'react';
import Header from './Header/component';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from '../Pages/Login/component';
import RegisterPage from '../Pages/Register/component';
import Home from '../Pages/HomePage/component';
//
import { useState, useEffect } from 'react';

const App = () => {
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    const userInfo = localStorage.userInfo && JSON.parse(localStorage.userInfo);
    if (userInfo) {
      setUserInfo(userInfo);
    }
    console.log('hi'); // test
  }, [localStorage, setUserInfo]);

  // logout user
  const logoutUser = () => {
    setUserInfo(null);
    delete localStorage.userInfo;
  };

  return (
    <div className="app">
      <Header userInfo={userInfo} logoutUser={logoutUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={userInfo ? <Navigate to="/" /> : <RegisterPage />}
        />
        <Route
          path="/login"
          element={
            userInfo ? (
              <Navigate to="/" />
            ) : (
              <LoginPage setUserInfo={setUserInfo} />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default App;
