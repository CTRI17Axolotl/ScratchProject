import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from './dataStore.js';
import backgrounds from '../components/Backgrounds.js';

const SignIn = () => {
  const nav = useNavigate();

  const { setActiveUser, pallet } = useContext(StoreContext); // this is breaking my route
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    document.body.style.backgroundImage = `url('${backgrounds.signIn[pallet]}')`;
  }, [pallet]);

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handlePwChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    event.preventDefault();
    if (!isSignUp) {
      userLogIn();
    } else {
      userSignUp();
    }
  };

  async function userLogIn() {
    const res = await fetch('/users/login', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) {
      alert('Wrong username or password. Please re-enter or sign up!');
      setUser('');
      setPassword('');
      return nav('/signin');
    }
    const data = await res.json();
    console.log('data from logging in ', data);
    setActiveUser(data);
    nav('/');
  }

  async function userSignUp() {
    //use mongo request to retrieve objectId
    const res = await fetch('/users/create', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        name: name,
        username: username,
        password: password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.ok) {
      setIsSignUp(false);
      setUser('');
      setPassword('');
    }
  }

  //use inputValue to fetch for user database
  return (
    <div className="signin-container">
      <div className="signin-form">
        {isSignUp && (
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
        )}
        {isSignUp && (
          <div>
            <label htmlFor="name">Display Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
        )}
        <div className="signin-textbox">
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUserChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              id="password"
              value={password}
              onChange={handlePwChange}
            />
          </div>
        </div>
        <button className="button" onClick={handleSubmit}>
          {isSignUp ? 'Sign Up!' : 'Sign In!'}
        </button>
        <br />
        {!isSignUp && (
          <p>
            Don't have an account?
            <button className="button" onClick={() => setIsSignUp(true)}>
              Sign Up Here
            </button>
          </p>
        )}
      </div>
    </div>
  );
};
export default SignIn;
