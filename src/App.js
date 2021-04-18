import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import AddAdmin from './components/Admin/AddAdmin/AddAdmin';
import AddService from './components/Admin/AddService/AddService';
import Order from './components/User/Order/Order';
import Login from './components/Login/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import OrderList from './components/User/OrderList/OrderList';
import OrderListAdmin from './components/Admin/OrderListAdmin/OrderListAdmin';
import AddTestimonial from './components/Home/AddTestimonal/AddTestimonial';
import ManageService from './components/Admin/ManageService/ManageService';
import UpdateService from './components/Admin/UpdateService/UpdateService';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/admin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/order/:id">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/orderList">
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path="/addTestimonial">
            <AddTestimonial></AddTestimonial>
          </PrivateRoute>
          <PrivateRoute path="/manageService">
            <ManageService></ManageService>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
