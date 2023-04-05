import React from "react";
import Register from "../Register/Register";
import '../../userRegistry/Welcome/welcome.css';
import Login from '../Login/login.css';

// import '../../userRegistry/Register/register.css';



function Welcome(){
    return(
        
    <>
        <header className="header">
            <h1 className="brand-logo"><u>Employah!</u></h1>
            <div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Employers</a></li>
                    <li><a href="/">Resources</a></li>
                    <li><a href="/">Contact Us</a></li>
                    <li><a href="/">About</a></li>
                </ul>
            </div>
            <div>
                <button className="registerbtn"><a href={Register}>Login</a></button>
            </div>
            <div>
                <button className="registerbtn"><a href={Register}>Register</a></button>
            </div>
        </header>

        <div className="wording">
        <div className="welcome-message"><b>This is the best employer to employee connect ever</b></div>
        <div className="welcome-message-2">Look no further in finding emlpoyment or finding employees, sit back and relax</div>
        <div className="welcome-message-3">We'll take that burden off you...</div>
        <div className="welcome-message-4">Smile, <span className="employah"><u><b>Employah!</b></u></span> has got you covered</div>
        

        </div>

        
        <div className="container1">
            Have you ever wished you were linked to your employer directly?
        </div>
        
        <div className="container3">
        Have you ever wished you were linked to your employer directly?

        </div>

        <div className="container2">
            Have you ever wished you were linked to your employer directly?
        </div>

        <div className="container4">container4</div>
        

    </>
        
       
    )
    
}
export default Welcome
