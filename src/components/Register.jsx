
import React ,{useRef} from 'react'
import { UserAuth} from '../context/AuthContext'
import { useNavigate} from 'react-router-dom'

const Register = () => {

  const emailRef =useRef()
  const passwordRef =useRef()
  const passworConfirm =useRef()

 const {createUser} =UserAuth()

const navi= useNavigate()

  const handleSubmit = async (e)=>{
    e.preventDefault()
    if(passwordRef.current.value !== passworConfirm.current.value)
    {
      alert('bir yerde hata var babalik')
    }
    try {
       await createUser(emailRef.current.value,passwordRef.current.value)
        navi('/login')

    } catch (error) {
      console.log(error)
      
    }


  }


  return (


    <div>


      <form onSubmit={handleSubmit}>
        <label > EMAIL</label>
        <input type="email"  ref={emailRef}/>

      <label> Password</label>
        <input type="password" ref={passwordRef} />

        <label> Password Confirm</label>
        <input type="password" ref={passworConfirm} />
        <button type='submit'> bas baba</button>
      </form>



    </div>
  )
}

export default Register