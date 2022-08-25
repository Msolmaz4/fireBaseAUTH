import React,{useRef} from 'react'
import { UserAuth} from '../context/AuthContext'
import { useNavigate} from 'react-router-dom'


const Login = () => {


  const emailRef =useRef()
  const passwordRef =useRef()
  const navigate = useNavigate()

  const {signIn} = UserAuth()

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await signIn(emailRef.current.value,passwordRef.current.value)
      navigate('/kullan')
    } catch (e) {
      
      console.log(e.message)
    }
  };

  return (

   

    <div>
      <form onSubmit={handleSubmit}>
        <label > EMAIL</label>
        <input type="email" ref={emailRef}/>

      <label> Password</label>
        <input type="password" ref={passwordRef} />
       <button type='submit'>LOGIN </button>
        
      </form>
    </div>
  )
}

export default Login