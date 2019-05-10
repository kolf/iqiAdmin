import * as actionTypes from './actionTypes';

export const { MODIFYIFAJAX } = actionTypes;
export const { PREVPATH } = actionTypes;
export const { NPROGRESSSTATE } = actionTypes;

export const modifyIfAjax = data => ({ type: actionTypes.MODIFYIFAJAX, data });
export const modifyPrevPath = data => ({ type: actionTypes.PREVPATH, data });
export const modifyNprogressState = data => ({
  type: actionTypes.NPROGRESSSTATE,
  data
});
