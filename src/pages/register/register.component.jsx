import React, { useState } from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import { Link, useHistory } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

import './sign-up.styles.scss';

const Register = () => {
  const [registerInfo, setRegisterInfo] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const history = useHistory();
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = registerInfo;

    if (password !== confirmPassword) {
      setError("passwords don't match");
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
      history.push('/login');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegisterInfo({ ...registerInfo, [name]: value });
  };

  const { displayName, email, password, confirmPassword } = registerInfo;

  return (
    <>
      <Header />
      <div className='sign-up'>
        <h2 className='title'>I don't have an account</h2>
        <span>Sign up with your email and password</span>
        {error && <Alert variant='danger'>{error}</Alert>}
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
          <div className='log-reg'>
            Already have an account? <Link to='login'>Sign In</Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Register;
