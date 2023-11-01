import React, { useState } from 'react';
import './App.css'; // Import styles from App.css

function CenteredText() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="centered-container">
      <h1 className="centered-text">Doer</h1>
      <p className="login-text">Log In</p>
      <div className="input-container">
        <label className="input-label">Email</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="email-input"
        />
      </div>
      <div className="input-container">
        <label className="input-label">Password</label>
        <input
          type="password" // Use type="password for password input
          value={password}
          onChange={handlePasswordChange}
          className="password-input"
        />
      </div>
    </div>
  );
}

export default CenteredText;
