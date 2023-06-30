import { useState, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userRegisterAction } from '../actions/userAction';
function Registration() {
    
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [address,setAddress]=useState('');
    const [type,setType]=useState('');
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const register_user=useSelector((state)=>state.userRegister);
    const{userInfo}=register_user;

    useEffect(()=>{
        if(userInfo){
            navigate("/dashboard")
        }else{
            navigate("/register")
        }
    },[dispatch,navigate,userInfo])

    const register = (e) =>{
        e.preventDefault();
        try {            
            dispatch(userRegisterAction(name,email,password,address,type))            
        } catch (error) {
            console.log(error)  
        }
        
    }
   

  return (
    <div>
        <form onSubmit={register}>
            <label>Name</label>
            <input onChange={(e)=>setName(e.target.value)} value={name}/><br/>
            <label>Email</label>
            <input onChange={(e)=>setEmail(e.target.value)} value={email}/><br/>
            <label>Password</label>
            <input onChange={(e)=>setPassword(e.target.value)} value={password}/><br/>
            <label>Address</label>
            <input onChange={(e)=>setAddress(e.target.value)} value={address}/><br/>
            <label>Type</label>
            <select onChange={(e)=>setType(e.target.value)} value={type}>
                <option>Please choose...</option>
                <option value="manufacturer">manufacturer</option>
                <option value="transporter">transporter</option>
            </select>
            <button type="submit">Submit</button>
        
        </form>
    </div>
  )
}

export default Registration