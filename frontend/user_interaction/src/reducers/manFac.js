import { MANFAC_LIST,CREATE_MANFAC } from "../constants/manFacConstants";
export const manFacReducer = (state = { manFac: [] }, action) => {
  switch (action.type) {
    case MANFAC_LIST:
      return { loading: false, manFac: action.payload };
    default:
      return state;
  }
};
export const createManFacReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_MANFAC:
      return { loading: false, manFac: action.payload };
    default:
      return state;
  }
};
