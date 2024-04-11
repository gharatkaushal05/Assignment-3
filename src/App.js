import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';

function App() {
  const defaultEmail = "gharatkaushal05@gmail.com";
  const defaultName = "Kaushal Gharat";
  return (
    <div className="container">
      <LoginForm defaultEmail={defaultEmail} defaultName={defaultName} />
    </div>
  );
}

export default App;