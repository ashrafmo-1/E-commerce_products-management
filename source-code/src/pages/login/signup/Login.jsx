import {Link} from "react-router-dom"
import NavgationBar from "../../../components/NavgationBar";

export default function Login() {










    
  return (











      <>
      <NavgationBar />
   <div style={{height: 'calc(100vh - 56px)'}} className={'flex-center'}>
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
   <p class="signin">Dont have an acount ? <Link to="/signup"> signup</Link> </p>
</form>
   </div>
      </>
  )
}
