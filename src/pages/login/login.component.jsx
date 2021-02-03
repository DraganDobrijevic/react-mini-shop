import React, { useState } from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './register-login.styles.scss';
import './sign-in.styles.scss';

const Login = () => {
  const [emailAndPassword, setEmailAndPassword] = useState({
    email: '',
    password: '',
  });

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmailAndPassword({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    setEmailAndPassword({ [name]: value });
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={emailAndPassword.email}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={emailAndPassword.password}
          handleChange={handleChange}
          label='password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
    // <div className='boxRegister'>
    //   <form action='/login' method='post'>
    //     <div className='form-group'>
    //       <input
    //         autoComplete='off'
    //         autoFocus
    //         className='form-control'
    //         name='username'
    //         placeholder='Username'
    //         type='text'
    //       />
    //     </div>
    //     <div className='form-group'>
    //       <input
    //         className='form-control'
    //         name='password'
    //         placeholder='Password'
    //         type='password'
    //       />
    //     </div>
    //     <button className='btn btn-primary' type='submit'>
    //       Log In
    //     </button>
    //   </form>
    // </div>
  );
};

export default Login;
