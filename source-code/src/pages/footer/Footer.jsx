 import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <>

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