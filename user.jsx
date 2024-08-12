import React,{useState} from "react";
import './user.css'
import user_png from './image/user.png';
import pass_png from './image/password.png';
import email_png from './image/email.png'
function Variable(){
const [user, setUser] = useState("Sign Up");


return(
    <div className="component">

      <div className="section1">
          <h1 className="user1">{user}</h1>
          <div className="underline"></div>
      </div>

      <div className="input">
        {user==="Login"?<div></div>:
        <div className="inputs">
           <img src={user_png} alt="" className="image-user"/>
           <input type="text" placeholder="Name" className="user-input"/>
        </div>}

        <div className="inputs">
         <img src={email_png} alt="" className="image-user"/>
         <input type="email" placeholder="Email id" className="user-input"/>
        </div>

        <div className="inputs">
         <img src={pass_png} alt="" className="image-user"/>
         <input type="password" placeholder="Password" className="user-input"/>
        </div>

      </div>
      {user==="Sign Up"?<div></div>:
       <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
    <div className="section2">
     <div className={user==="Login"?"submit gray":"submit"} onClick={()=>{setUser("Sign Up")}}>Sign Up</div>
     <div className={user==="Sign Up"?"submit gray":"submit"} onClick={()=>{setUser("Login")}}>Login</div>
    </div>

    </div>
);


}
export default Variable