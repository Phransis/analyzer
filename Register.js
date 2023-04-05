import React from 'react'
import '../../userRegistry/Register/register.css';
import register1 from'../../images/register.jpg'

function Register(){
    return(
        <>
        
        <section className='register-container'>
        <div>
        <h1 className='register-h1'>Register</h1>
        <div>
            <img src= {register1} alt='register' className="register-image"/>
        </div>
        </div>
        <form for="" className='forms'>
            <div>
                <div className='label-container'><label>First name</label></div>
                <input className='register-inputs'  type = "text" name= "firstname" placeholder = "firstname"></input>
            </div>
            <div>
            <div className='label-container'><label>Last name</label></div>
                <input className='register-inputs' type = "text" name= "lastname" placeholder = "lastname"></input>
            </div>
            <div>
            <div className='label-container'><label>Password</label></div>
                <input className='register-inputs' type = "password" name= "password" placeholder = "password"></input>
            </div>
            <div>
            <div className='label-container'><label>Confirm Password</label></div>
                <input className='register-inputs' type = "password" name= "cpassword" placeholder = "confirm password"></input>
            </div>
            <div className='btn'>
            <button className='register-btn'>register</button>
            </div>
        </form>
        
        </section>
        </>

    
        

    )
}
export default Register;
