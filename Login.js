import React from 'react'
import '../../userRegistry/Login/login.css';
import login1 from'../../images/login2.jpg'
//import {useState} from 'react';


function Login(){
    //const [email, setEmail] = useState('');
    //const [pass, setPass] = useState('');
    return(
        <>
        
        <section className='login-container'>
        <div>
        <h1 className='login-h1'>Login</h1>
        <div>
        <img src= {login1} alt='login' className="login-image"/>

        </div>
        </div>
        <form for="" className='login_forms'>
            <div>
                <div className='login-label-container'><label>Email</label></div>
                <input className='login-inputs'  type = "text" name= "email" placeholder = "email"></input>
            </div>

            <div>
            <div className='login-label-container'><label>Password</label></div>
                <input className='login-inputs' type = "password" name= "password" placeholder = "password"></input>
            </div>
            <div className='loginbtn'>
            <button className='login-btn'>login</button>
            </div>
            
        </form>
        <a href='../../userRegistry/Login/login.js'>Don't have an account?</a>
        </section>
        </>

    
        

    )
}
export default Login;
