import React, { useState } from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import { Link, useHistory } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

import './sign-in.styles.scss';

const Login = () => {
  const [emailAndPassword, setEmailAndPassword] = useState({
    email: '',
    password: '',
  });
  const history = useHistory();
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(
        emailAndPassword.email,
        emailAndPassword.password
      );
      setEmailAndPassword({ email: '', password: '' });
      history.push('/');
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setEmailAndPassword({ ...emailAndPassword, [name]: value });
  };

  return (
    <>
      <Header />
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password</span>
        {error && <Alert variant='danger'>{error}</Alert>}

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
            <CustomButton
              type='button'
              onClick={async () => {
                await signInWithGoogle();
                history.push('/');
              }}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
          <div className='log-reg'>
            <Link to='forgot-password'>Forgot Password?</Link>
          </div>
          <div className='log-reg'>
            Need an account? <Link to='register'>Register</Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
