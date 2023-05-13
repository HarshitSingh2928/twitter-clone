import React, { useState } from 'react';
import { Link, useHistory, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './LoginPage.css';

const LoginPage = ({setLoggedIn}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setEmailValid(validateEmail(value));
    setFormValid(validateForm(value, password));
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    setPasswordValid(validatePassword(value));
    setFormValid(validateForm(email, value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    setLoggedIn(true)
    
  };

  const validateEmail = (value) => {
    // Check for valid email address
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const validatePassword = (value) => {
    // Check for at least one uppercase letter, numbers and a special character
    return /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
  };

  const validateForm = (email, password) => {
    // Check if both email and password inputs are filled
    return email !== '' && password !== '' && validatePassword(password);
  };

  return (
    <div className="login-page">
      <FontAwesomeIcon icon={faTwitter} className='twitter-icon' />
      <h1>Log in to Twitter</h1>
      <form className='login-form' onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <div className="input-icon">
            <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} />
            <FontAwesomeIcon icon={faEnvelope} className={`icon ${emailValid ? 'valid' : ''}`} />
          </div>
          {!emailValid && email !== '' && <div className="error-message">Please enter a valid email address</div>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="input-icon">
            <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
            <FontAwesomeIcon icon={faLock} className={`icon ${passwordValid ? 'valid' : ''}`} />
          </div>
          {!passwordValid && password !== '' && <div className="error-message">Please enter a strong password</div>}
        </div>
        <button type="submit" disabled={!formValid}>Log in</button>
      </form>
    </div>
  );
};

export default LoginPage;
