<<<<<<< HEAD
 import React from 'react'
import "./Footer.css"
=======
import React from "react";
import "./Footer.css";
import { FaPhone } from "react-icons/fa6";
>>>>>>> 3640b1bef341869ccbf92bdbfeb7ad0857127309

export default function Footer() {
  return (
    <>
<<<<<<< HEAD

      <div  className='Container '> 
       <h1 className='logo'> Yourlogo</h1>
        <div style={{margin:"70px",gap:"20px"}} className='contact' >
        
        <div  style={{display:"flex" , gap:"25px"}} className='cont'>
            <h3 >About</h3>
            <h3 >Careers</h3>
            <h3 >press</h3>
            <h3 >Customer Care</h3>
            <h3 >Services</h3>
        </div>
        
        <div className='enter'>
        
          <h5 style={{fontSize:"15px"}}>Get the freshest news from us</h5>
        <input placeholder="Enter your email" className="input" name="email" type="email"/>
         <button className="button">Subscribe</button>

         
        </div>
       

        <div className="line"></div>
        </div>

        <div style={{margin:"70px"}} className='contact' >
        <div  style={{ gap:"25px"}} className='cont2'>
            <h3 >Terms & Conditions |</h3>
            <h3 > Privacy Policy |</h3>
            <h3 > Accessibility |</h3>
            <h3 > Legal |</h3>
           
           
        </div>
                <div>
                      <h3 style={{fontSize:"10px"}}> Design with love © TanahAirStudio 2020. All right reserved</h3>
         </div>
         </div>
         </div>
    </>
  )
}
=======
      <div className="Container ">
        <div className="contact">
          <div className="cont">
            <h3 style={{ color: "gold" }}>About Us</h3>
            <h5> Lorem ipsum dolor sit amet consectetur adipisicing elit. </h5>
            <h3>Contact Us</h3>
            <h5>
              {" "}
              <FaPhone /> 01021702322 / 01007481557{" "}
            </h5>
          </div>

          <div className="cont">
            <h3 style={{ color: "gold" }}>information</h3>
            <h5> Lorem ipsum dolor sit amet consectetur adipisicing elit. </h5>
            <h3>Contact Us</h3>
            <h5>
              {" "}
              <FaPhone /> 01021702322 / 01007481557{" "}
            </h5>
          </div>
          <div className="cont">
            <h3 style={{ color: "gold" }}>Links</h3>
            <h5> Lorem ipsum dolor sit amet consectetur adipisicing elit. </h5>
            <h3>Contact Us</h3>
            <h5>
              {" "}
              <FaPhone /> 01021702322 / 01007481557{" "}
            </h5>
          </div>
          <div>
            <input
              placeholder="Enter your email"
              class="input"
              name="email"
              type="email"
            />
            <button className="button">Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> 3640b1bef341869ccbf92bdbfeb7ad0857127309
