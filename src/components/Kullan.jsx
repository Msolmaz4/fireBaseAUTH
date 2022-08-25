
import React from 'react'
import {useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Kullan = () => {

 const {user,logout} =UserAuth()

 const navigate= useNavigate()

 const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };


  return (
    <div>

   <p>Email kontrol</p> <br /><br />

   <p>email {user && user.email}</p>

   <button onClick={handleLogout} >Logout</button>


    </div>
  )
}

export default Kullan