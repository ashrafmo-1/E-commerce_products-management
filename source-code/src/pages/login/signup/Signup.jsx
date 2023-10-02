import React, { useEffect, useState } from 'react'
import "../signup/signup.css"
import { Link } from "react-router-dom";
import NavgationBar from "../../../components/NavgationBar";
import axios from "axios"

export default function Signup() {
const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [passwordR,setPasswordR] = useState("");

const [Accept,setAccept] = useState(false);
const[emailerror,setemailError] =useState("");

 async function Submit(e){
    let flag = true ;
    e.preventDefault();
    setAccept(true);

  name ===  "" || password.length<8 || passwordR !== password?  flag = false : flag = true;
  
try {
    if(flag){
   let res = await axios.post("http://127.0.0.1:8000/api/register" , {
  

    name : name,
    email :email,
    password:password,
    password_confirmation: passwordR  })

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

    <form onSubmit={Submit} nav="home"  className="form">
    <p className="title">Register </p>
    <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">


        <label>
            <input style={{width:"19rem"}} required="" placeholder="" type="text" className="input" 
            value={name}
            onChange={(e) => setName(e.target.value)}/>
            {name === "" && Accept && <p style={{fontSize:"10px" 
                         ,color:"red"}}> user name is required </p>}
            <span>Firstname</span>

        </label> 
       
    </div>
    <label>
        <input required="" placeholder="" type="email" className="input" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>
      {Accept && emailerror === 422 && <p style={{color:"red"}}> email is Already been taken</p> }
        <span>Email</span>
    </label>
    <label>
        <input required="" placeholder="" type="password" className="input" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
        {password.length < 8 && Accept && <p style={{fontSize:"10px" 
                         , color:"red"}}>   PassWord must be more than 8 char </p>}  
        <span>Password</span>
    </label>

    <label>
        <input required="" placeholder="" type="password" className="input" 
        value={passwordR} 
        onChange={(e) => setPasswordR(e.target.value)}/>
        { passwordR !== password && Accept && <p style={{fontSize:"10px" ,
                          color:"red"}}> PassWord does not match</p>} 
        <span>Confirm password</span>
    </label>

    <button className="submit">Submit</button>
    <p className="signin">Already have an acount ? <Link to="/login"> Sign in</Link> </p>
    <p className="signin">Are you admin? <Link to="/dashboard"> dashboard</Link> </p>
    </form>
    </div>
</>
  )
}
