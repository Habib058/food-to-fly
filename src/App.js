import './App.css'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Admin from './components/Admin/Admin';
import Deals from './components/Deals/Deals';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.css';
import Checkout from './components/Checkout/Checkout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { createContext } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import AddProducts from './components/AddProducts/AddProducts';
import ManageProducts from './components/ManageProducts/ManageProducts';

export const userContext = createContext()

function App() {
  const [loggedInUser,setLoggedInUser] =useState({});
  return (
    <userContext.Provider value= {[loggedInUser,setLoggedInUser]}>
      <Router>
      <NavBar></NavBar>
      <Switch>
        <Route path="/home"><Home/></Route>
        
        <PrivateRoute path="/orders">
          <Orders/>
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
            <Checkout/>
          </PrivateRoute>
        <Route path ="/admin">
          <Admin/>
          </Route>
          <PrivateRoute path='/addProducts'>
            <AddProducts/>
          </PrivateRoute>
          <PrivateRoute path='/manageProducts'>
            <ManageProducts/>
          </PrivateRoute>
        <Route path ="/deals">
          <Deals/>
          </Route>
        <Route path ="/login">
          <Login/>
        </Route>
        <Route exact path='/'>
          <Home/>
          </Route>
        {/* <Route path="*">
          <NotFound/>
        </Route> */}
      </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
