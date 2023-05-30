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
                    <li><a href="home">Home</a></li>
                    <li><a href="employers">Employers</a></li>
                    <li><a href="resources">Resources</a></li>
                    <li><a href="contact_us">Contact Us</a></li>
                    <li><a href="about">About</a></li>
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
        <hr className="rule"></hr>

            <div className="need">Need something to be done?</div>

           <div className="sign-up-box"> 
           <div className="sign-up-header">Sign Up</div> 
           
           <div className="sign-up">
            Open a free account with Employah! 
            today and try out the best Ai recruitment technology
            </div> 
            </div>


            <div className="e-CV-box"> 
           <div className="e-CV-header">Fill the e-CV</div> 
           <div className="e-CV">
           Go ahead and fill your e-CV on this platform 
           based on the skills you have in handy
            </div> 
            </div>


            
            <div className="takeTEST-box"> 
           <div className="takeTEST-header">Take the test</div> 
           <div className="takeTEST">
           Take the skillset test based on your e-CV and land youreslf a job
            </div> 
            </div>


            <div className="getRANKED-box"> 
           <div className="getRANKED-header">Get Ranked</div> 
           <div className="getRANKED">
                Ranking is our way of sorting interviewees based on 
                performance in the test 
            </div> 
            </div>


            


        <div className="container1">
            <p className="linked">Have you ever wished you were linked to your employer directly?</p>
            <p className="dream">Have you ever dreamt of being shortlisted in your dream job?</p>
            <p className="location">Has your geographical location been a barrier to you been employed?</p>
        </div>
        
        <div className="container3">
        <p>Our powerful Ai algorithm helps to link right employees to the right employer</p>

        </div>

       
       
       
       
        <div className="container2">
        <p className="version">You're the best version of yourself don't let anything stop you from achieving the best</p>
        <p className="best">Are you ready to be the <b><i>best?</i></b></p>
        </div>

        <p className="info1">
            Employah is a complete recruitment automation software. 
            It automates candidate sourcing, candidate screening, candidate engagement.</p>
        <p className="info2">
            <i>
                Simple and intuitive user interface helps you focus on most important thing, hiring
            </i></p>
        
         
        <div className="uniqueness">Our uniqueness? </div>
         
         <div className="largePOOL-box"> 
           <div className="largePOOL-header">Large pool</div> 
           <div className="largePOOL">
           Browse through a large database of qualified 
           employees to employ from with ease
            </div> 
        </div>

        <div className="timeSAVING-box"> 
           <div className="timeSAVING-header">Time saving</div> 
           <div className="timeSAVING">
           Relax, as we handle all the tedious work of recruitment 
           efficiently within a matter of seconds

            </div> 
        </div>

        <div className="virtual-box"> 
           <div className="virtual-header">Video Call</div> 
           <div className="virtual">
           Conduct your interview process efficiently in an 
           all in one platform with our video call option with ease
            </div> 
        </div>

        <div className="skillset-box"> 
           <div className="skillset-header">Skillset</div> 
           <div className="skillset">
           Employah has by far the largest pool of quqlity skilled personnel globally
            </div> 
        </div>        


        <div className="on">
        <div className="onTheGo">On the go</div>

        <div className="updated">
        Be updated on who has the best job offerings with our time tracker
        </div>
        </div>

        <div className="container4">
        <p className="job"><i>Having a job means that you have an important role in the world</i></p>
        <p className="test">Join Employah, Take the test, Get emloyed!!! </p>
    
        
        </div>    

        <div className="clarify-box">
        <span className="clarifications">Need clarifications?</span> 
        <div className="bot">
        Check out <i>
            <b>Stacy</b>
            </i>, our chatbot for more details to asnswers to your questions
        </div>
        </div>
        
        <p className="con" >Join millions of skilled personnel on the platform and have the opportunity
        of being employed right on this platform</p> 
        employah!
        <hr></hr>
---------------------------------------------------------------------------------------------  
        <footer>Employah!</footer>

    </>
        
       
    )
    
}
export default Welcome
