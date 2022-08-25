import React from 'react'
import {useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Kullan = () => {

 const {user,logout} =UserAuth()

 const navo= useNavigate()

 const handel = ()=>{
    logout()
    navo('/')
   
 }


  return (
    <div>

   <p>Email kontrol</p> <br /><br />

   <p>email {user && user.email}</p>

   <button onclick={handel}>Logout</button>


    </div>
  )
}

export default Kullan