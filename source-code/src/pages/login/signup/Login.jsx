import {Link} from "react-router-dom"
import NavgationBar from "../../../components/NavgationBar";
import React, {  useState } from 'react'
import axios from "axios";

export default function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const[Accept,setAccept] =useState(false);
    const[emailerror,setemailError] =useState("");
    
    
     async function Submit(e){
        let flag = true ;
        e.preventDefault();
        setAccept(true);
    
      
    try {
        if(flag){
       let res = await axios.post("http://127.0.0.1:8000/api/login" , {
      
    
        email :email,
        password:password,

        })
    
        if(res.status ===200 ){
            window.localStorage.setItem("email",email);
            window.location.pathname= "/"
    
    
        }
    
    
    
       }
    
    } catch(err) {
        setemailError(err.response.status)
    } };
     
    
    
    





    
  return (











      <>
      <NavgationBar />
   <div style={{height: 'calc(100vh - 56px)'}} className={'flex-center'}>
   <form class="form" onSubmit={Submit}>
   <p class="title">login </p>
   <p class="message">login now and get full access to our app. </p>
   <div class="flex">
   </div>

   <label>
       <input required="" placeholder="" type="email" class="input"
       onChange={(e) => setEmail(e.target.value)}/>
                                   {Accept && emailerror === 422 }

       <span>Email</span>
   </label>
       
   <label>
       <input required="" placeholder="" type="password" class="input"
       onChange={(e) => setPassword(e.target.value)}
       />
            {Accept&& emailerror === 401 &&  <p style={{fontSize:"10px" ,
                          color:"red"}}> PassWord error </p>}

       <span>Password</span>
   </label>
   
   <button class="submit">Submit</button>
   <p class="signin">Dont have an acount ? <Link to="/signup"> signup</Link> </p>
</form>
   </div>
      </>
  )
}
