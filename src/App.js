import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register'
import {AuthContextProvider} from './context/AuthContext'


function App() {
  return (
    <AuthContextProvider>
 <BrowserRouter>
     <div className="App">
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
   </Routes>

    </div>
    
    </BrowserRouter>
   
    </AuthContextProvider>
   
  );
}

export default App;
