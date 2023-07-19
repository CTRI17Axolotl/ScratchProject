import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



const SignIn = () => {
  const nav = useNavigate();

  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handlePwChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    event.preventDefault();
    fetch('/users/login', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password
      }),
      headers: {
        "Content-Type": 'application/json'
      }
    })
    .then(res => {
      if(!response.ok){
        //some logic to either say wrong username/password
        //OR a change in the route to change it into a sign up page
      }
    })
    //some additional logic regarding the response
    //perform authentication logic here with user database here!!
    .catch(err => {
      
    })
  };

//use inputValue to fetch for user database
  return (
    <div className = "signin-container">
      <div>
        <label htmlFor="username">Username:</label>
         <input type="text" id='username' value = {username} onChange = {handleUserChange}/>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="text" id='password' value = {password} onChange = {handlePwChange}/>
      </div>
      <button onClick={handleSubmit}>Sign In!</button>
    </div>
  )
}

export default SignIn;