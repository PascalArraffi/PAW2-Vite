import React from 'react'
import { NavLink } from 'react-router'

export const Register = () => {
  return (
    <div>
        <h1>REGISTER PAGE</h1>

        <NavLink to="/about" className="btn btn-primary" >GO TO ABOUT PAGE</NavLink>
    </div>
    
  )
}

export default Register