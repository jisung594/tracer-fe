import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

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
        .then(data => {
          if (data['status'] === 'new') {
            setState({'state': !registeredState.state, 'user': data['user']})
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
    return <Redirect to={`/profile/${registeredState['user']['id']}`}/>
  }


  return (
    <div className='form'>
      <h2> Register </h2>
      <form onSubmit={(event) => registerUser(event)}>
        <input
          type='text'
          name='first_name'
          placeholder='First Name'
          onChange={e => setInput({...formInput, [e.target.name]: e.target.value})}
        />
        <input
          type='text'
          name='last_name'
          placeholder='Last Name'
          onChange={e => setInput({...formInput, [e.target.name]: e.target.value})}
        />
        <input
          type='text'
          name='email'
          placeholder='Email'
          onChange={e => setInput({...formInput, [e.target.name]: e.target.value})}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          onChange={e => setInput({...formInput, [e.target.name]: e.target.value})}
        />
        <input
          type='password'
          name='password_conf'
          placeholder='Confirm Password'
          onChange={e => setInput({...formInput, [e.target.name]: e.target.value})}
        />
        <input type='submit'/>
      </form>
    </div>
  )

}

export default Register;
