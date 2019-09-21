import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import * as History from 'history'
import rootReducer from './modules'
import { getData } from './modules/editor/actions'
import { getFromFirebase, saveUser } from './modules/firebase/actions'
import firebase from 'firebase'
import * as types from './modules/firebase/actionTypes'
const queryString = require('query-string');

export const history = History.createBrowserHistory()

const initialState = {}
const enhancers = []
const middleware = [thunk, routerMiddleware(history)]

const firebaseConfig = {
  apiKey: "AIzaSyC1Ae16VeG_VHqZQXWLNxY9oUe5bmAQATM",
  authDomain: "todo-f5cb1.firebaseapp.com",
  databaseURL: "https://todo-f5cb1.firebaseio.com",
  projectId: "todo-f5cb1",
  storageBucket: "",
  messagingSenderId: "294517743961",
  appId: "1:294517743961:web:f9bdc8d11ede7b3cc3ec48"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers
);

const params = queryString.parse(window.location.search);
if(params.uid) store.dispatch({type: types.SAVE_UID, uid: params.uid});

store.dispatch({type: 'firebase.getToken'});
store.dispatch({type: 'firebase.getUid'});
store.dispatch(getData());
store.dispatch(saveUser());
store.dispatch(getFromFirebase());

export default store;
