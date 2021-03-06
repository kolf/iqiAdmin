import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../components/Loading/Loading';

export default [
  {
    key: '1',
    text: '登录',
    path: '/login',
    exact: true,
    component: Loadable({
      loader: () => import('../pages/users/login'),
      loading: () => <Loading state />
    })
  }
];
