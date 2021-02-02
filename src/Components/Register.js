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
      <h2> REGISTER </h2>
      <form onSubmit={(event) => registerUser(event)}>

        <div>
          <input
            id='first_name'
            type='text'
            name='first_name'
            onChange={e => setInput({...formInput, [e.target.name]: e.target.value})}
            required
          />
          <label htmlFor="first_name">First Name</label>
        </div>
        <div>
          <input
            id='last_name'
            type='text'
            name='last_name'
            onChange={e => setInput({...formInput, [e.target.name]: e.target.value})}
            required
          />
          <label htmlFor="last_name">Last Name</label>
        </div>

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
        <div>
          <input
            id='password_conf'
            type='password'
            name='password_conf'
            onChange={e => setInput({...formInput, [e.target.name]: e.target.value})}
            required
          />
          <label htmlFor="password_conf">Confirm Password</label>
        </div>
        <div className='submit-div'>
          <input type='submit'/>
        </div>
      </form>
    </div>
  )

}

export default Register;
