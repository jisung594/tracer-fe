import React from 'react'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Register from './Components/Register'
import AssetProfile from './Components/AssetProfile'
import UserProfile from './Components/UserProfile'
import Index from './Components/Index'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './Styling/App.scss'


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Navbar />
        <div className='main'>
          <Switch>
            <Route component={Login} path='/login'/>
            <Route component={Register} path='/register'/>
            <Route component={AssetProfile} path='/asset/:id'/>
            <Route component={UserProfile} path='/user/:id'/>
            <Route component={Index} path='/index'/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
