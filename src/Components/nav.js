import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import Link from 'antd/es/typography/Link';
import { Menu } from 'antd';
const items = [
  {
    label: (
      <Link to="/features" >
        Home
      </Link>
    ),
    key: 'home',
  },
  {
    label: (
      <Link href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Features
      </Link>
    ),
    key: 'features',
  },
  {
    label: (
      <Link href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Integration
      </Link>
    ),
    key: 'integration',
  },
  {
    label: (
      <Link href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Pricing
      </Link>
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
