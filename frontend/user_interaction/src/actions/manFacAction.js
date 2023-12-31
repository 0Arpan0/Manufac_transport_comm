import axios from "axios";
import { MANFAC_LIST, CREATE_MANFAC } from "../constants/manFacConstants";

export const getManufacturer=()=>async(dispatch,getState)=>{
    try {
        const {
            userLogin: { userInfo },
          } = getState()
        const config = {          
            headers: {
              Authorization: `Bearer ${userInfo.token}`
            }
          }
        const { data } = await axios.get("http://localhost:5000/api/order",config)
        //console.log(data);
        dispatch({
            type:MANFAC_LIST,
            payload:data
        })
    } catch(error) {
        console.log(error)
    }
}
export const createManufacturer=(to,from,quantity,address,transporter)=>async(dispatch,getState)=>{
    try {
        const {
            userLogin: { userInfo },
          } = getState()
        const config = {          
            headers: {
              Authorization: `Bearer ${userInfo.token}`
            }
          }
        const { data } = await axios.post("http://localhost:5000/api/order",{to,from,quantity,address,transporter},config)
        //console.log(data);
        dispatch({
            type:CREATE_MANFAC,
            payload:data
        })
    } catch(error) {
        console.log(error)
    }
}