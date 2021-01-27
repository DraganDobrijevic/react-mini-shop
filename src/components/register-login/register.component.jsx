import React from 'react';
import './register-login.styles.scss';

const Register = () => {
  return (
    <div className='boxRegister'>
      <form action='/register' method='post'>
        <div className='form-group'>
          <input
            autoComplete='off'
            autoFocus
            className='form-control'
            name='fullName'
            placeholder='Full name'
            type='name'
            id='fullName'
          />
        </div>
        <div className='form-group'>
          <input
            className='form-control'
            name='username'
            placeholder='Username'
            type='text'
            id='username'
          />
        </div>
        <div className='form-group'>
          <input
            className='form-control'
            name='email'
            placeholder='Email'
            type='email'
            id='email'
          />
        </div>
        <div className='form-group'>
          <input
            className='form-control'
            name='password'
            placeholder='Password'
            type='password'
          />
        </div>
        <div className='form-group'>
          <input
            className='form-control'
            name='confirmation'
            placeholder='Password'
            type='password'
          />
        </div>
        <button className='btn btn-primary' type='submit' id='submit'>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
