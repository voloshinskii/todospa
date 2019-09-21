import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Editor from '@stfy/react-editor.js';
import { saveData } from '../../modules/editor/actions';
import { authFirebase } from '../../modules/firebase/actions'
import vkQr from '@vkontakte/vk-qr';

function showQr(uid) {
  const qrSvg = vkQr.createQR(`https://todo.voloshinskii.ru?uid=${uid}`, {
    qrSize: 256,
    isShowLogo: false
  });
  return (
    <div style={{textAlign: 'center'}}>
      <h2>Share this note</h2>
      <div style={{width: '256px', margin: 'auto', marginBottom: '10px'}} dangerouslySetInnerHTML={{__html: qrSvg}}/>
    </div>
  );
}

const Home = ({authFirebase, saveData, data, uid, editor}) => (
  <div>
    {!uid && <button onClick={authFirebase}>Sync with other devices</button>}
    {editor(saveData)}
    {uid && showQr(uid)}
  </div>
)

const mapStateToProps = ({ editor, firebase }) => ({
  data: editor.data,
  uid: firebase.uid,
  editor: editor.editor
})
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      saveData,
      authFirebase
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
