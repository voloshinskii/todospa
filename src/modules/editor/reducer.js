import React from 'react';
import Immutable from 'seamless-immutable';

import * as types from './actionTypes';
import Editor from '@stfy/react-editor.js'
import { saveData } from './actions'

const initialState = Immutable({
  aboutTooltip: true,
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.SAVE_DATA:
      localStorage['data'] = JSON.stringify(action.data);
      return state.merge({
        data: action.data,
      });
    case types.GET_DATA:
      let data = (localStorage['data'] && JSON.parse(localStorage['data'])) || {
        "time" : 1554920381017,
        "blocks" : [
          {
            "type" : "header",
            "data" : {
              "text" : "Hello world!",
              "level" : 2
            }
          },
        ],
        "version" : "2.12.4"
      };
      function editor(saveData){
        return <Editor
          autofocus
          holderId="editorjs-container"
          onChange={(data) => saveData(data)}
          onReady={() => console.log('Start!')}
          data={data}
        />
      }
      return state.merge({
        data,
        editor
      });
    default:
      return state;
  }
}