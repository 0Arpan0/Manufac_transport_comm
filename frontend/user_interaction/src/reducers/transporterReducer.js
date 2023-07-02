import { CREATE_TRANSPORTER,TRASPORTER_LIST } from "../constants/transporterConstant";
export const transporterListReducer = (state = { transporter: [] }, action) => {
  switch (action.type) {
    case TRASPORTER_LIST:
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
