import React, { Component } from 'react';
// import Animate from 'rc-animate';
import { Layout, Icon } from 'antd';
import './index.less';

const { Header } = Layout;

// eslint-disable-next-line react/prefer-stateless-function
class HeaderView extends Component {
  render() {
    const { collapsed, toggleSide } = this.props;

    return (
      <Header style={{ background: '#fff', padding: 0 }} className="header">
        <Icon
          style={{ fontSize: 20, color: '#333' }}
          className="collapsed"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={() => toggleSide()}
        />
      </Header>
    );
  }
}

export default HeaderView;
