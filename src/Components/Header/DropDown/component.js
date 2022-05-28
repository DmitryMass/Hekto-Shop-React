import React from 'react';
import { Dropdown, Space } from 'antd';
//
import { menu } from '../../../Data/DropDownData/component';
//
import './dropdown.scss';
//
import arrow from '../../../Assets/icons/home-arrow.svg';
//

const DropDown = () => (
  <Dropdown overlay={menu}>
    <a className="dropdown__btn" onClick={(e) => e.preventDefault()}>
      <Space>Home</Space>
      <object data={arrow} type=""></object>
    </a>
  </Dropdown>
);

export default DropDown;
