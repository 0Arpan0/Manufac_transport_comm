import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import { user_login_reducer, user_register_reducer } from "../reducers/userReducer";
import { createManFacReducer, manFacReducer } from "../reducers/manFac";
import { createTransporterReducer, transporterListReducer } from "../reducers/transporterReducer";

const reducer = combineReducers({
  userLogin: user_login_reducer,
  manfac_list_reducer:manFacReducer,
  createManFac:createManFacReducer,
  userRegister:user_register_reducer,
  transporterList:transporterListReducer,
  createTransporter:createTransporterReducer
});
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
