import React from 'react';

const Login = ({ defaultEmail, defaultName }) => {
  return (
    <div className="login-form">
      
      <div>
        <label>Name:</label>
        <input
          type="text"
          defaultValue={defaultName}
          required
          className="name-input"
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          defaultValue={defaultEmail}
          required
          className="email-input"
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          required
          className="name-input"
        />
      </div>
      <button className="login-button">Login</button>
    </div>
  );
};

export default Login;