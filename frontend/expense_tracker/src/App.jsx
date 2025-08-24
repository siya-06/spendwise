import React from 'react'

import{
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from './pages/auth/login';
import Signup from './pages/Auth/Signup';
import Home from './pages/dashboard/home'; 
import Income from './pages/dashboard/income';
import Expense from './pages/dashboard/expense';
const App = () => {
  return (
   <div>
    <Router>
      <Routes>
        <Route path="/" element ={<Root/>} />
        <Route path="/login" exact element={<Login/>} />
        <Route path="/signup" exact element={<Signup/>} />
        <Route path="/dashboard" exact element={<Home/>} />
        <Route path="/income" exact element={<Income/>} />
        <Route path="/expense" exact element={<Expense/>} />
      </Routes>
    </Router>

   </div>
  )
}

export default App

const Root = () =>{
  //check if token exists in localstorage
  const isauthenticated =!!localStorage.getItem("token");

  //redirect to dashboard if authenticated, otherwise to login
  return isauthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login"/>
  );
}
