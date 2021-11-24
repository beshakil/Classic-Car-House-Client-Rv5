import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Page/Home/Home/Home';
import CarsAll from './Page/CarsAll/CarsAll';
import CarDetails from './Page/CarDetails/CarDetails';
import Orders from './Page/Orders/Orders';
import Login from './Page/Login/Login/Login';
import Register from './Page/Login/Register/Register';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './Page/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Page/Dashboard/Dashboard/Dashboard';
import AllReviews from './Page/AllReviews/AllReviews';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/allCars">
              <CarsAll></CarsAll>
            </Route>
            <Route path="/allReviews">
              <AllReviews></AllReviews>
            </Route>
            <PrivateRoute exact path="/carDetails/:carId">
              <CarDetails></CarDetails>
            </PrivateRoute>
            <PrivateRoute exact path="/carOrder/:carId">
              <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
