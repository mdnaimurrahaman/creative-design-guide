import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const [errors, SetErrors] = useState({
        email: "",
        password: "",
        general: "",
    })

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
      ] = useSignInWithEmailAndPassword(auth);


    const handleEmailChange = (e)=> {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);
        if(validEmail){
            setUserInfo({...userInfo, email: e.target.value})
            SetErrors({...errors, email:""})
        } else{
            SetErrors({...errors, email:"Invalid email"})
            setUserInfo({...userInfo, email:""})
        }
    }
    const handlePasswordChange = (e)=>{
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);
        if (validPassword){
            setUserInfo({...userInfo, password: e.target.value});
            SetErrors({...errors, password:""})
        } else{
            SetErrors({...errors, password:"Minimum 6 characters"});
            setUserInfo({...userInfo, password:""})
        }
        
    }

    const handleLogin = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(userInfo.email,userInfo.password)
    }

    useEffect(()=>{
        if(hookError){
            switch(hookError?.code){
                case "auth/invalid-email":
                    toast('Invalid email provided, please provide a valid email')
                    break;
                case "auth/invalid-password":
                    toast("Wrong password. Please provide a right password.")
                    break
                    default:
                        toast("something went wrong")
            }
        }
    },[hookError])

    return (
        <div className='login-container'>
            <div className='login-title'>LOGIN</div>
            <form className='login-form' onSubmit={handleLogin}>
                <input type="text" placeholder='Your Email' onChange={handleEmailChange} />
                {errors?.email && <p className='error-message'>{errors.email}</p>}
                <input type="password" placeholder='password' onChange={handlePasswordChange}/>
                {errors?.password && <p className='error-message'>{errors.password}</p>}
                <button>Login</button>

                <ToastContainer></ToastContainer>
                <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
            </form>
        </div>
    );
};

export default Login;