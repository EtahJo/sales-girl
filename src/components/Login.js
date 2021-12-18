import React ,{useState}from 'react';
import './login.css';
import {createUserWithEmailAndPassword,
     signInWithEmailAndPassword,signInWithPopup} from "firebase/auth";
import {auth,provider} from '../firebase';
import {Link , useNavigate} from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [email,setEmail]= useState('');
    const[password, setPassword] = useState('');
    const register =async()=>{
        try{
            const user =await createUserWithEmailAndPassword(auth,email,password)
            navigate('/')
        }catch(error){
            console.log(error.message)
        }
    };
 
    const login = async()=>{
        try{
            const user = await signInWithEmailAndPassword(auth,email,password)
            navigate('/');
        }catch(error){
            console.log(error.message)
        }
    }
    const signInWithGoogle=()=>{
        signInWithPopup(auth,provider).then((result)=>{
          console.log(result)
          if(auth){
              navigate('/')
          }
        }).catch((error)=>{
          console.log(error)
        })
      };
  
    return (
        <div className='login'>
            <div className="login-header">
            <h1>Sign In</h1>
            </div>
            <div className="login-body">
                <div className="login-email">
                <label>Email</label>
                <input type="text" placeholder='What is your email ?' 
                onChange={(event)=>{setEmail(event.target.value)}}
                />
                </div>
                <div className="login-password">
                <label>Password</label>
                <input type="password" placeholder='What is your password ?'
                onChange={(event)=>{setPassword(event.target.value)}}
                />
                </div>
                <div className="login-style">
                <button  type='submit'onClick={login}>Login</button>
                <button type='submit' onClick={register}>Sign Up</button>
                </div>
                <h5>Or Sign In With</h5>
             
                 <img src="https://4.bp.blogspot.com/-Pp8TROoyTwc/VeXXFhKQwWI/AAAAAAAACPo/b2g71CJ_Hj8/s1600/inline-googles-new-logo.png" alt="" 
                 onClick={signInWithGoogle}
                 />
            
                

               
            </div>
        </div>
    )
}
