/* eslint-disable react/prefer-stateless-function */
import React, { Suspense } from 'react';
// import api from '../../services'
import Loading from '../../components/Loading/Loading';

const IntroduceRow = React.lazy(() => import('./IntroduceRow.js'));

class Analyze extends React.Component {
  render() {
    return (
      <Suspense fallback={<Loading />}>
        <IntroduceRow />
      </Suspense>
    );
  }
}

export default Analyze;
