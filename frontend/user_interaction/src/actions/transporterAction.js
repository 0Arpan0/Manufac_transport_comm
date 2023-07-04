import axios from "axios";
import {CREATE_TRANSPORTER, TRANSPORTER_LIST } from "../constants/transporterConstant";

export const getTransporter=()=>async(dispatch,getState)=>{
    try {
        const {
            userLogin: { userInfo },
          } = getState()
        const config = {          
            headers: {
              Authorization: `Bearer ${userInfo.token}`
            }
          }
        const { data } = await axios.get("http://localhost:5000/api/tranporter",config)
        //console.log(data);
        dispatch({
            type:TRANSPORTER_LIST,
            payload:data
        })
    } catch(error) {
        console.log(error)
    }
}
export const createTransporter=(order_id,price)=>async(dispatch,getState)=>{
    try {
        const {
            userLogin: { userInfo },
          } = getState()
        const config = {          
            headers: {
              Authorization: `Bearer ${userInfo.token}`
            }
          }
        const { data } = await axios.post("http://localhost:5000/api/transporter",{order_id,price},config)
        //console.log(data);
        dispatch({
            type:CREATE_TRANSPORTER,
            payload:data
        })
    } catch(error) {
        console.log(error)
    }
}