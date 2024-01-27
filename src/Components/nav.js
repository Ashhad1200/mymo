
import Nav from 'react-bootstrap/Nav';
import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Home
      </a>
    ),
    key: 'home',
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Features
      </a>
    ),
    key: 'features',
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Integration
      </a>
    ),
    key: 'integration',
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Pricing
      </a>
    ),
    key: 'pricing',
  },
];

const NavigationBar = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal"  items={items} />;
}

export default NavigationBar;
