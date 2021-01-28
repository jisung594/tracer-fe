import React from 'react'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Register from './Components/Register'
import AssetProfile from './Components/AssetProfile'
import UserProfile from './Components/UserProfile'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div>
          <p> *** main container *** </p>

          <Switch>
            <Route component={Login} path='/login'/>
            <Route component={Register} path='/register'/>
            <Route component={AssetProfile} path='/asset/:id'/>
            <Route component={UserProfile} path='/user/:id'/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
