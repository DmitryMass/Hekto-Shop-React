import React from 'react';
import { Link } from 'react-router-dom';

import armchair from '../../Assets/icons/Armchair.svg';
// import lamp from '../../Assets/icons/Lamp.svg';

const Slide = () => {
  return (
    <div>
      <div className="carousel__slide">
        <div className="container flex__slide">
          <div className="main__about">
            <p className="main__subtitle">Best Furniture For Your Castle....</p>
            <h1 className="h1 main__title">
              New Furniture Collection Trends in 2020
            </h1>
            <p className="main__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <Link className="main__btn" to="">
              Shop Now
            </Link>
          </div>
          <div className="main__product">
            <object data={armchair} type="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
