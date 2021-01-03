import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Col, Menu, Row } from 'antd';
import { useSelector } from 'react-redux';

const AppLayout = ({ children }) => {
  const { me } = useSelector(state => state.user);

  if(me){
    return (
      <div>
        <Menu mode="horizontal">
          <Menu.Item key="home"><Link href="/home"><a>홈</a></Link></Menu.Item>
          <Menu.Item key="record"><Link href="/record"><a>기록</a></Link></Menu.Item>
        </Menu>
        <Row gutter={8}>
          <Col xs={24} md={12}>
            {children}
          </Col>
        </Row>
      </div>
    );
  }else{
    return (
      <div>
        {children}
      </div>
    );
  };
};

AppLayout.propTypes = {
  children: PropTypes.node,
};


export default AppLayout;