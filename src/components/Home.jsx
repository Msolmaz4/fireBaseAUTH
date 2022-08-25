import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div> 

        FREI BASE MIT AUH BENUTYEN
        <Link to='/login'>Login</Link>
        <br /><br />
        <Link to='/register'> Register</Link>
    </div>
  )
}

export default Home