import React from 'react'
import {Link} from "react-router-dom"

export default function Login() {
  return (
   <> 
   <form class="form">
   <p class="title">login </p>
   <p class="message">login now and get full access to our app. </p>
       <div class="flex">
       

       
   </div>  
           
   <label>
       <input required="" placeholder="" type="email" class="input"/>
       <span>Email</span>
   </label> 
       
   <label>
       <input required="" placeholder="" type="password" class="input"/>
       <span>Password</span>
   </label>
   
   <button class="submit">Submit</button>
   <p class="signin">Dont have an acount ? <Link href="/signup"> signup</Link> </p>
</form>
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   </>
  )
}
