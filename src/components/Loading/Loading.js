import React from 'react';
import { connect } from 'react-redux';
import './index.less';

const mapStateToProps = state => {
  return {
    spinState: state.layoutReducer.spinState
  };
};

const Loading = React.memo(props => {
  const { spinState, state } = props;
  return (
    <div className="slice">
      {spinState || state ? <div className="jump" /> : ''}
    </div>
  );
});

export default connect(mapStateToProps)(Loading);
