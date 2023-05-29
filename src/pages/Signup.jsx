import React from 'react';
import styled from 'styled-components';
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';

export default function Signup() {
  return 
    <Container>
      <BackgroundImage />
      <Header />
      <div className='body flex column a-center j-center'>
        <div calssName='column test flex'>
          <h1>The best Movies and TV shows</h1>
          <h4>Watch anywhere. Cancel anytime</h4>
          <h6>
            Enter your Email to start a membership
          </h6>
        </div>
        <div className='form'>
          <input type="email" placeholder='Email Adress' name='email' />
          <input type="password" placeholder='Password' name='password' />
          <button>Get Started</button>
        </div>
        <button>Log In</button>
      </div>
      </Container>;
}

const Container = styled.div``;
