import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom';


const Profile = () => {

    const auth = useAuth();
    const navigate = useNavigate();
    const clickHandler = () =>{
        auth.logout();
        navigate('/');
    }
  return (
    <div>
        Hello, {auth.user}<br />
        <button onClick={clickHandler}>Log out</button>
    
    </div>
  )
}

export default Profile
