/* eslint-disable react/prefer-stateless-function */
import React, { Suspense } from 'react';
import { Button } from 'antd';
// import api from '../../services'
import Loading from '../../components/Loading/Loading';

const IntroduceRow = React.lazy(() => import('./IntroduceRow.js'));

class Analyze extends React.Component {
  render() {
    return (
      <Suspense fallback={<Loading />}>
        <Button>dddddddddd</Button>
        <IntroduceRow />
      </Suspense>
    );
  }
}

export default Analyze;
