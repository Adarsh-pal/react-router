import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'

export const NavBar = () => {

    const navigate = useNavigate();
    const auth = useAuth();
    const active = ({isActive}) =>{
       return {
            textDecoration : isActive?"none":"underline",
            color : isActive?"red":"blue"
        }
    }

  return (
    <nav>
        <button onClick={()=> navigate(-1)}>Back</button>
        <NavLink style={active} to='/'>Home</NavLink>
        <NavLink style={active} to='about'>About Us</NavLink>
        <NavLink style={active} to='contact '>Contact</NavLink>
        <NavLink style={active} to='cart' >Cart</NavLink>
        <NavLink style={active} to='profile'>Profile</NavLink>
        {
           !auth.user && <NavLink style={active} to='login'>Login</NavLink>
        }
    </nav>
  )
}
