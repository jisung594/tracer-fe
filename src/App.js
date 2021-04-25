import React from 'react'
import Navbar from './Components/Navbar'
import Homepage from './Components/Homepage'
import Login from './Components/Login'
import Register from './Components/Register'
import SecurityProfile from './Components/SecurityProfile'
import UserProfile from './Components/UserProfile'
import SecurityIndex from './Components/SecurityIndex'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './Styling/App.scss'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className='main'>
          <Switch>
            <Route component={Homepage} exact path='/'/>
            <Route component={Login} path='/login'/>
            <Route component={Register} path='/register'/>
            <Route component={UserProfile} path='/user/:id'/>
            <Route component={SecurityIndex} path='/security'/>
            <Route component={SecurityProfile} path='/security/:id'/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
