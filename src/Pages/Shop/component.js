import { Col, Row } from 'antd';
import React from 'react';
import ShopFilter from '../../Components/ShopComponents/ShopFilter/component';
import ShopProduct from '../../Components/ShopComponents/ShopProduct/component';

import './shop.scss';

const Shop = () => {
  return (
    <div className="shop">
      <div className="container">
        <div className="container">
          <Row>
            <Col flex={1}>
              <ShopFilter />
            </Col>
            <Col flex={4}>
              <ShopProduct />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Shop;
