import React from 'react';
//
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

export const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <Link rel="noopener noreferrer" to="/shoplist">
            Shop List
          </Link>
        ),
      },
      {
        key: '2',
        label: (
          <Link rel="noopener noreferrer" to="/shopLeftSidebar">
            Shop Left Sidebar
          </Link>
        ),
      },
      {
        key: '3',
        label: (
          <Link rel="noopener noreferrer" to="/productsDetails">
            Products Details
          </Link>
        ),
      },
      // {
      //   key: '4',
      //   // danger: true,
      //   label: 'a danger item',
      // },
    ]}
  />
);
