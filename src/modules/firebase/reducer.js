import React from 'react';
import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

const initialState = Immutable({});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.SAVE_TOKEN:
      localStorage['token'] = action.token;
      return state.merge({
        token: action.token,
      });
    case types.GET_TOKEN:
      let token = localStorage['token'];
      return state.merge({
        token
      });
    case types.SAVE_UID:
      localStorage['uid'] = action.uid;
      return state.merge({
        uid: action.uid
      });
    case types.GET_UID:
      let uid = localStorage['uid'];
      return state.merge({
        uid
      });
    default:
      return state;
  }
}