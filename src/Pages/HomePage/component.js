import React from 'react';
import { Carousel } from 'antd';
//
import './home.scss';
//
import Slide from '../../Components/Carousel/component';
//

const Home = () => {
  return (
    <main className="main">
      <Carousel autoplay>
        <Slide />
        <Slide />
        <Slide />
      </Carousel>
    </main>
  );
};

export default Home;
