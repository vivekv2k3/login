import React, { useState } from 'react';
import './App.css';

function CenteredText() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // Implement your login logic here
    console.log("Logging in with email:", email, "and password:", password);
  };

  return (
    <div className="centered-container">
      <h1 className="centered-text">Your Text Here</h1>
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
        <div className="password-input-container">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            className="password-input"
          />
          <input
            type="checkbox"
            onChange={togglePasswordVisibility}
            checked={showPassword}
            className="password-toggle"
          />
        </div>
      </div>
      <button className="login-button" onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default CenteredText;
