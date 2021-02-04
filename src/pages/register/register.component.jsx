import React, { useState } from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './register-login.styles.scss';
import './sign-up.styles.scss';

const Register = () => {
  const [registerInfo, setRegisterInfo] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = registerInfo;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      console.log(registerInfo);

      setRegisterInfo({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      alert(error.message);
      console.error(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegisterInfo({ ...registerInfo, [name]: value });
  };

  const { displayName, email, password, confirmPassword } = registerInfo;

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
    // <div className='boxRegister'>
    //   <form action='/register' method='post'>
    //     <div className='form-group'>
    //       <input
    //         autoComplete='off'
    //         autoFocus
    //         className='form-control'
    //         name='fullName'
    //         placeholder='Full name'
    //         type='name'
    //         id='fullName'
    //       />
    //     </div>
    //     <div className='form-group'>
    //       <input
    //         className='form-control'
    //         name='username'
    //         placeholder='Username'
    //         type='text'
    //         id='username'
    //       />
    //     </div>
    //     <div className='form-group'>
    //       <input
    //         className='form-control'
    //         name='email'
    //         placeholder='Email'
    //         type='email'
    //         id='email'
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
    //     <div className='form-group'>
    //       <input
    //         className='form-control'
    //         name='confirmation'
    //         placeholder='Password'
    //         type='password'
    //       />
    //     </div>
    //     <button className='btn btn-primary' type='submit' id='submit'>
    //       Register
    //     </button>
    //   </form>
    // </div>
  );
};

export default Register;
