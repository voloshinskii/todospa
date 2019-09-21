import * as types from './actionTypes';
import uuidv4 from 'uuid/v4';
import firebase from 'firebase';
import { SAVE_DATA } from '../editor/actionTypes'

export function saveUser() {
  return async (dispatch, getState) => {
    let state = getState();
    if(!state.firebase.token){
      let token = uuidv4();
      dispatch({type: types.SAVE_TOKEN, token});
    }
  };
}

export function authFirebase() {
  return async (dispatch, getState) => {
    let state = getState();
    const token = state.firebase.token;
    let res;
    try {
      res = await firebase.auth().createUserWithEmailAndPassword(`${token}@voloshinskii.ru`, token);
    }
    catch (e) {
      res = await firebase.auth().signInWithEmailAndPassword(`${token}@voloshinskii.ru`, token);
    }
    dispatch({type: types.SAVE_UID, uid: res.user.uid});
  };
}

export function saveInFirebase() {
  return async (dispatch, getState) => {
    let state = getState();
    const uid = state.firebase.uid;
    firebase.database().ref('users/' + uid).set({
      data: state.editor.data
    }, function(error) {
      if (error) {
        // The write failed...
      } else {
        // Data saved successfully!
      }
    });
  }
}

export function getFromFirebase() {
  return async (dispatch, getState) => {
    let state = getState();
    const uid = state.firebase.uid;
    if(uid){
      return firebase.database().ref('/users/' + uid).once('value').then(function(snapshot) {
        let data = snapshot.val();
        dispatch({type: SAVE_DATA, data: data.data, force: true});
      });
    }
  }
}