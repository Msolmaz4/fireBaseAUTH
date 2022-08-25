import React from 'react'

const Login = () => {

    const handleSub =(e)=>{
        e.preventDefault()
    }


  return (

   

    <div>
      <form onSubmit={handleSub}>
        <label > EMAIL</label>
        <input type="email" />

      <label> Password</label>
        <input type="password" />
       <button type='submit'>LOGIN </button>
        
      </form>
    </div>
  )
}

export default Login