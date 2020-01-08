import React from 'react';
import { connect } from 'react-redux';
import { startGoogleLogin, startFaceBookLogin } from  '../actions/auth';

export const LoginPage = ({startGoogleLogin, startFaceBookLogin}) => (

  <div>
      <h1>Login here</h1>
      <button onClick={startGoogleLogin} >Google</button>
      <button onClick={startFaceBookLogin} >FaceBook</button>
  </div>
    

);

const mapDispatchToProps = (dispatch) => ({

  startGoogleLogin: () => dispatch(startGoogleLogin()),
  startFaceBookLogin: () => dispatch(startFaceBookLogin())

});

export default connect(undefined, mapDispatchToProps)(LoginPage);