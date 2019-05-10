import * as actionTypes from './actionTypes';

export const { INTERVIEWLOADING } = actionTypes;

export const interviewLoading = data => ({
  type: actionTypes.INTERVIEWLOADING,
  loading: data
});

export function modifyInterviewLoading(data) {
  return dispatch => {
    dispatch(interviewLoading(data));
  };
}
