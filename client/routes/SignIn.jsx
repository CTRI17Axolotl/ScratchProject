import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from './dataStore.js';

const SignIn = () => {
  const nav = useNavigate();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

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
      fetch('/users/login', {
        method: 'POST',
        body: JSON.stringify({
          username: username,
          password: password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error('Wrong username or password.');
            //some logic to either say wrong username/password
            //some additional logic regarding the response (session/token?)
            //perform authentication logic here with user database here!!
          } else {
            // const {setActiveUser} = useContext(StoreContext);
            // setActiveUser(userId);
            nav('/');
          }
        })
        .catch((err) => {
          throw new Error(
            'Error occurred in post request to log in user ',
            err
          );
        });
    } else {
      fetch('/users/create', {
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
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error('Cannot create new user');
            //some logic to either say wrong username/password
            //OR a change in the route to change it into a sign up page
          } else {
            //some additional logic regarding the response (session/token?)
            //perform authentication logic here with user database here!!
            nav('/');
          }
        })
        .catch((err) => {
          throw new Error('Error occurred post request to create user ', err);
        });
    }
  };
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
