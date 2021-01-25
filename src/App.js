import React from 'react'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Register from './Components/Register'
import AssetProfile from './Components/AssetProfile'
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
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
