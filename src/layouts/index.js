/* eslint-disable react/no-find-dom-node */
import React from 'react';
import { Layout } from 'antd';
import SideMenu from './sideMenu';
import HeaderView from './header';
import Content from './content';
import Loading from '../components/Loading/Loading';

const { Footer } = Layout;
class LayoutView extends React.Component {
  state = {
    collapsed: false,
    currentWidth: document.body.clientWidth
  };

  componentDidMount() {
    if (document.body.clientWidth === 0) {
      setTimeout(() => {
        this.setState(() => ({ currentWidth: document.body.clientWidth }));
      }, 100);
      window.addEventListener('resize', this.resizeBind);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeBind);
  }

  resizeBind = () => {
    this.setState({ currentWidth: document.body.clientWidth });
  };

  toggle = () => {
    this.setState(prevState => ({ collapsed: !prevState.collapsed }));
  };

  render() {
    const { collapsed, currentWidth } = this.state;

    return (
      <Layout style={{ height: '100vh' }}>
        <SideMenu trigger={null} collapsed={collapsed} />
        <Layout
          ref={node => {
            this.mainPage = node;
          }}
        >
          <Loading />
          <HeaderView
            collapsed={collapsed}
            currentWidth={currentWidth}
            toggleSide={this.toggle}
          />
          <Content />
          <Footer style={{ textAlign: 'center' }}>
            @Copyright Antd Of React Template
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutView;
