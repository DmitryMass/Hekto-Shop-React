import React from 'react';
import { Carousel } from 'antd';
//
import './home.scss';
//
import Slide from '../../Components/Carousel/component';
import Shop from '../Shop/component';
//

const Home = () => {
  return (
    <main className="main">
      <Carousel autoplay>
        <Slide />
        <Slide />
        <Slide />
      </Carousel>
      <Shop />
    </main>
  );
};

export default Home;
