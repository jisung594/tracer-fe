import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import '../Styling/Form.scss'

const Register = () => {
  const [formInput, setInput] = useState({});
  const [registeredState, setState] = useState({'state':false,'user':{}})

  let registerUser = (e) => {
    e.preventDefault()

    if (formInput['password'] !== formInput['password_conf']) {
      alert('Please confirm password.')
    } else {
      let formData = new FormData();
      formData.append('first_name', formInput['first_name'])
      formData.append('last_name', formInput['last_name'])
      formData.append('email', formInput['email'])
      formData.append('password', formInput['password'])

      fetch('http://127.0.0.1:5000/register', {
        method: 'POST',
        body: formData
      })
        .then(res => res.json())
        .then(obj => {
          if (obj['user']) {
            setState({'state': !registeredState.state, 'user': obj['user']})
            alert(`${formInput['email']} is successfully registered`)
          } else {
            alert(`${formInput['email']} is already registered`)
          }
        })
        .catch(console.error)
    }
  }


  if (registeredState.state) {
    localStorage.setItem('user', JSON.stringify(registeredState['user']))
    // localStorage.setItem('token', ************)
    return <Redirect to={{
          pathname: `/user/${registeredState['user']['id']}`,
          state: { id: registeredState['user']['id'] }
      }}
    />
    // return <Redirect to={`/profile/${registeredState['user']['id']}`}/>
  }


  return (
    <div className='form'>
      <h2> Register </h2>
      <form onSubmit={(event) => registerUser(event)}>

        <div>
          <label for="first_name">First Name</label>
          <input
            type='text'
            id='first_name'
            name='first_name'
            // placeholder='First Name'
            onChange={e => setInput({...formInput, [e.target.name]: e.target.value})}
          />
        </div>
        <div>
          <label for="last_name">Last Name</label>
          <input
            type='text'
            id='last_name'
            name='last_name'
            // placeholder='Last Name'
            onChange={e => setInput({...formInput, [e.target.name]: e.target.value})}
          />
        </div>

        <div>
          <label for="email">Email</label>
          <input
            type='text'
            id='email'
            name='email'
            // placeholder='Email'
            onChange={e => setInput({...formInput, [e.target.name]: e.target.value})}
          />
        </div>
        <div>
          <label for="password">Password</label>
          <input
            type='password'
            id='password'
            name='password'
            // placeholder='Password'
            onChange={e => setInput({...formInput, [e.target.name]: e.target.value})}
          />
        </div>
        <div>
          <label for="password_conf">Confirm Password</label>
          <input
            type='password'
            id='password_conf'
            name='password_conf'
            // placeholder='Confirm Password'
            onChange={e => setInput({...formInput, [e.target.name]: e.target.value})}
          />
        </div>
        <input type='submit'/>
      </form>
    </div>
  )

}

export default Register;
