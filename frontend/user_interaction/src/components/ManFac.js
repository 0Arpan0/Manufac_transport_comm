import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
function ManFac() {
    const [to,setTo]=useState();
    const [from,setFrom]=useState();
    const [quantity,setQuantity]=useState();
    const [address,setAddress]=useState();
    const [transporter,setTransporter]=useState();
    const [user,setUser]=useState([]);
    const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
    const api=async()=>{
      const userData = await axios.get(
        "http://localhost:5000/api/users/alluser"
      );
      setUser(userData.data);
      console.log(userData.data);
    }
    useEffect(()=>{
      api()
  },[])
    const sub=async(e)=>{
        e.preventDefault();
        try {
            
            const config = {
              headers: {
                "Content-Type": "application/json",
              },
            };
            const res = await axios.post(
              `${USER_API}/Login`,
              { to, from,quantity,address,transporter },
              config
            );
      
            localStorage.setItem("userInfo", JSON.stringify(res));
            history.push("/admin/dashboard");
          } catch (error) {
            setError(true);
          }
    }
    return (
    <div>
        <form onSubmit={sub}>
            <label>Order_id</label>
            <input value=""/><br/>
            <label>To</label>
            <input value={to} onChange={(e)=>setTo(e.target.value)}/><br/>
            <label>From</label>
            <input value={from} onChange={(e)=>setFrom(e.target.value)}/><br/>
            <label>Quantity</label>
            <select onChange={(e)=>setQuantity(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <label>Address</label>
            <textarea value="scscd"></textarea>
            <label>Transporter</label>
            <select>
                <option></option>
            </select>
            <button type='submit'>Push</button>
        </form>
        {user.map((item)=>(
        <div>
        {item.name}
        {item.email}
        </div>
      ))}
    </div>
  )
}

export default ManFac