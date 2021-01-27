import React from 'react';
import './register-login.styles.scss';

const Login = () => {
  return (
    <div className='boxRegister'>
      <form action='/login' method='post'>
        <div className='form-group'>
          <input
            autoComplete='off'
            autoFocus
            className='form-control'
            name='username'
            placeholder='Username'
            type='text'
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
        <button className='btn btn-primary' type='submit'>
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
