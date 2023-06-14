import { USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL } from "../constants/userConstants";

export const  user_login_reducer =(state={},action)=>{
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {loding:true};
        case USER_LOGIN_SUCCESS:
            return {loading:false, userInfo:action.payload}
        case USER_LOGIN_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}