import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import '../Styling/Form.scss';

const Login = () => {
  const [formInput, setInput] = useState({});
  const [loggedInUser, setUser] = useState({})

  let loginUser = (e) => {
    e.preventDefault()

    let formData = new FormData();
    formData.append('email', formInput['email'])
    formData.append('password', formInput['password'])

    fetch('http://127.0.0.1:5000/login', {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(obj => {
        setUser(obj['user'])
      })
  }

  if (loggedInUser['id']) {
    return <Redirect to={`/user/${loggedInUser['id']}`}/>
  }


  return (
    <div className="form">
      <h2> LOGIN </h2>
      <form onSubmit={(event) => loginUser(event)}>
        <div>
          <input
            id='email'
            type='text'
            name='email'
            onChange={e => setInput({...formInput, [e.target.name]: e.target.value})}
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <div>
          <input
            id='password'
            type='password'
            name='password'
            onChange={e => setInput({...formInput, [e.target.name]: e.target.value})}
            required
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className='submit-div'>
          <input type='submit'/>
        </div>
      </form>
    </div>
  )

}

export default Login;
