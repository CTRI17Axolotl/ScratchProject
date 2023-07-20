import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from './dataStore.js';
import backgrounds from '../components/Backgrounds.js';

const SignIn = () => {
  const nav = useNavigate();

  const { setActiveUser, activeUser, palette, userList, setUserFaves } =
    useContext(StoreContext); // this is breaking my route
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    document.body.style.backgroundImage = `url('${backgrounds.signIn[palette]}')`;
  }, [palette]);

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
    const userIndex = userList.findIndex((el) => el._id === data);
    console.log('Logged in as user ', data, ', setting faves to ', [
      userList[userIndex].favorites,
    ]);
    setUserFaves(userList[userIndex].favorites);
    setTimeout(() => {
      nav('/');
      console.log('Current active user:', activeUser);
    }, 800);
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
       if(res.ok) {
        setIsSignUp(false);
        setUser('');
        setPassword('');
       }
       else{
        alert('Cannot leave inputs blank, please enter required new account information.')
       }
    };

  //use inputValue to fetch for user database
  return (
    <div className="signin-container">
      <div className="signin-form">
        <form className="signup-textbox" onSubmit={handleSubmit}>
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
            <div>
                <label htmlFor="username" className="off-center-label">Username:</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={handleUserChange}
                />
            </div>
            <div>
              <label htmlFor="password" className="off-center-label">Password:</label>
              <input
                type="text"
                id="password"
                value={password}
                onChange={handlePwChange}
              />
            </div>
          <button className="button" onClick={handleSubmit}>
            {isSignUp ? 'Sign Up!' : 'Sign In!'}
          </button>
        </form>
        <br />
        {!isSignUp && (
          <div className = "new-account-text">
            <p>
                Don't have an account?
              <br/>
            </p>
            <button className="button" onClick={() => setIsSignUp(true)}>
              Sign Up Here
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default SignIn;
