import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
// import { getManufacturer } from '../actions/manFacAction';
// import { createManufacturer } from '../actions/manFacAction';
import { useNavigate  } from "react-router-dom";
import { createTransporter } from '../actions/transporterAction';
import { getManufacturer } from '../actions/manFacAction';

function ManFac() {
  const userLogin=useSelector((state)=>state.userLogin)
  const {userInfo}=userLogin
    const [order,setOrder]=useState();
    const [price,setPrice]=useState();
    const Navigate=useNavigate();
    const dispatch=useDispatch();
    const ManFacList=useSelector((state)=>state.manfac_list_reducer)
    const {manFac}=ManFacList;
    
    const sub=async(e)=>{
        e.preventDefault();
        try {            
          e.preventDefault();
          dispatch(createTransporter(order,price))          
          } catch (error) {
            console.log(error);
          }
    }
    
    useEffect(()=>{
      if(userInfo){
      dispatch(getManufacturer());
      }else{
        Navigate("/login");
      }
    },[dispatch,userInfo,Navigate])
    console.log(manFac)
    return (
    <div>
        <form onSubmit={sub}>
            <label>To</label>
            <input onChange={(e)=>setOrder(e.target.value)} value={order}/><br/>
            
              <select >
              <option value="">Please choose the id</option>
              {manFac.map((item)=>(
               
                <option value={item._id}>{item._id}</option>
                ))}
              </select>
           
            <br/>
            <label>From</label>
            <input onChange={(e)=>setPrice(e.target.value)} value={price}/><br/>
            <button type='submit'>Push</button>

        </form>
      
      {manFac.map((item)=>(
        <div>
        {item.to}
        {item.from}
        {item.quantity}
        {item.address} 
        </div>
      ))}
    </div>
  )
}

export default ManFac