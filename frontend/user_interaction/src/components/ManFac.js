import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
// import { getManufacturer } from '../actions/manFacAction';
import { createManufacturer } from '../actions/manFacAction';
import { getTransporter } from '../actions/transporterAction';
import { useNavigate  } from "react-router-dom";


function ManFac() {
  const userLogin=useSelector((state)=>state.userLogin)
  const {userInfo}=userLogin
  const Navigate=useNavigate();
    const [to,setTo]=useState();
    const [from,setFrom]=useState();
    const [quantity,setQuantity]=useState("1");
    const [address,setAddress]=useState(userInfo.address);
    const [transporters,setTransporter]=useState(userInfo.transporter);
   
    const dispatch=useDispatch();
    const transporterLists=useSelector((state)=>state.transporterList)
    const {transporter}=transporterLists 
    const sub=async(e)=>{
        e.preventDefault();
        try {            
          e.preventDefault();
          dispatch(createManufacturer(to,from,quantity,address,transporters))          
          } catch (error) {
            console.log(error);
          }
    }
    
    useEffect(()=>{
      if(userInfo){
      dispatch(getTransporter());
      }else{
        Navigate("/login");
      }
    },[dispatch,userInfo,Navigate])
    console.log(transporter)
    return (
    <div>
        <form onSubmit={sub}>
            <label>To</label>
            <input onChange={(e)=>setTo(e.target.value)} value={to}/><br/>
            <label>From</label>
            <input onChange={(e)=>setFrom(e.target.value)} value={from}/><br/>
            <label>Quantity</label>
            <select onChange={(e)=>setQuantity(e.target.value)} value={quantity}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <label>Address</label>
            <textarea onChange={(e)=>setAddress(e.target.value)} value={address}></textarea>
            <label>Transporter</label>
            <input onChange={(e)=>setTransporter(e.target.value)} value={transporters}/><br/>
            <button type='submit'>Push</button>
        </form>
      
      {/* {manFac.map((item)=>(
        <div>
        {item.to}
        {item.from}
        {item.quantity}
        {item.address} 
        </div>
      ))} */}
    </div>
  )
}

export default ManFac