import React from 'react';
import Login from './Login';

const LoginForm = ({ defaultEmail, defaultName }) => {
  return (
    <div className="login-form">
      <h2>Login</h2>
      <Login defaultEmail={defaultEmail} defaultName={defaultName} />
    </div>
  );
};

export default LoginForm;