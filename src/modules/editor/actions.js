import * as types from './actionTypes';
import { saveInFirebase } from '../firebase/actions'

export function saveData(data) {
  return async (dispatch) => {
    dispatch({ type: types.SAVE_DATA, data });
    dispatch(saveInFirebase());
  };
}

export function getData() {
  return async (dispatch) => {
    dispatch({ type: types.GET_DATA });
  };
}