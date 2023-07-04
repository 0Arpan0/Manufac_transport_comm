import { TRANSPORTER_LIST, CREATE_TRANSPORTER } from "../constants/transporterConstant";
export const transporterListReducer = (state = { transporter: [] }, action) => {
  switch (action.type) {
    case TRANSPORTER_LIST:  
      //console.log("reducer called")   
      return { loading: false, transporter: action.payload };
    default:
      return state;
  }
};
export const createTransporterReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_TRANSPORTER:
      return { loading: false, transporter: action.payload };
    default:
      return state;
  }
};
