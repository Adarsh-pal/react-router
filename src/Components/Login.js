import React , {useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './Auth';
const Login = () => {

    const [user,setUser] = useState('');
    const navigate = useNavigate();
    const auth = useAuth();
    const location = useLocation

    const redirectLocation = location.state?.path || '/'
    
    const clickHandler = () => {
        auth.login(user);
        navigate(redirectLocation, {replace : true});
    }
  return (
    <div>
        <label>
            Username : <input type='text' value={user} onChange={e => setUser(e.target.value)}></input>
            <button onClick={clickHandler}>Sign in</button>
        </label>
    </div>
  )
}

export default Login