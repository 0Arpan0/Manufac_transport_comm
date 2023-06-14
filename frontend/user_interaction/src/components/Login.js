import React from "react";
import { useState, useEffect } from "react";
import {useSelector,useDispatch} from "react-redux"
import {userLogin} from "./../actions/userAction"
import { useNavigate  } from "react-router-dom";
function Login() {
  const navigate=useNavigate ();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [type, setType] = useState();
  const dispatch=useDispatch();
  const {error,userInfo,loading}=useSelector((state)=>state.userLogin)
  const sub = (e) => {
    try {
      e.preventDefault();   
      dispatch(userLogin(email,password,type));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    if(!userInfo){
      navigate("/")
    }else if(userInfo.type==="manufacturer" || userInfo.type==="transporter"){
      navigate("/dashboard");
    }
  },[dispatch, navigate, userInfo])
  return (
    <div>
      <form onSubmit={sub}>
        <label>email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />        
        <button type="submit">Push</button>
      </form>
    </div>
  );
}

export default Login;
