import React, { useState } from 'react';

import './forgot-password.styles.scss';
import Alert from 'react-bootstrap/Alert';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { resetPassword } from '../../firebase/firebase.utils';

import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setMessage('');
      await resetPassword(email);
      setMessage('Check your inbox for further instructions');
      setEmail('');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  return (
    <div className='forgot-password'>
      <h2>Password Reset</h2>
      <span>Please enter your email address</span>
      {error && <Alert variant='danger'>{error}</Alert>}
      {message && <Alert variant='success'>{message}</Alert>}

      <form className='forgot-password-form' onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='email'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'>Reset Password</CustomButton>
        </div>
        <div className='log-reg'>
          <Link to='login'>Login</Link>
        </div>
        <div className='log-reg'>
          Need an account? <Link to='register'>Register</Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
