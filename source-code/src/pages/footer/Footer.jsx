import React from 'react'
import "./Footer.css"
import { FaPhone } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className='Container '>


      <button class="uiverse">
    <div class="wrapper">
        <span>M&A Store</span>
        <div class="circle circle-12"></div>
        <div class="circle circle-11"></div>
        <div class="circle circle-10"></div>
        <div class="circle circle-9"></div>
        <div class="circle circle-8"></div>
        <div class="circle circle-7"></div>
        <div class="circle circle-6"></div>
        <div class="circle circle-5"></div>
        <div class="circle circle-4"></div>
        <div class="circle circle-3"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-1"></div>
    </div>
</button>


       

<div className='contact' >    
        <div className='cont'>
            <h3 style={{color:"gold"}}>About Us</h3>
            <h5> Lorem ipsum dolor sit amet consectetur adipisicing elit.     </h5>
            <h3>Contact Us</h3>
            <h5>       <FaPhone/>     01021702322 / 01007481557  </h5>
        </div>
        
        <div className='cont'>
            <h3 style={{color:"gold"}}>information</h3>
            <h5> Lorem ipsum dolor sit amet consectetur adipisicing elit.      </h5>
            <h3>Contact Us</h3>
            <h5>       <FaPhone/>     01021702322 / 01007481557  </h5>
        </div>   
        <div className='cont'>
            <h3 style={{color:"gold"}}>Links</h3>
            <h5> Lorem ipsum dolor sit amet consectetur adipisicing elit.     </h5>
            <h3>Contact Us</h3>
            <h5>       <FaPhone/>     01021702322 / 01007481557  </h5>
        </div>

        <div>
        <input placeholder="Enter your email" class="input" name="email" type="email"/>
   <button class="button">Subscribe</button> 

        </div>

        
        
        </div>
        
        
        
        
        
        
        
        
        










        </div>  
    </>
  )
}
