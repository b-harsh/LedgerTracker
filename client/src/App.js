import "antd/dist/antd.css";
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Test from "./pages/Test";

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>

          <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
          <Route path='/test' element={<ProtectedRoute><Test/></ProtectedRoute>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>

        </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export function ProtectedRoute(props){

  if(localStorage.getItem('checkSpense')){
    return props.children;
  }
  else{
    return <Navigate to='/login'/>
  }

}

export default App;
