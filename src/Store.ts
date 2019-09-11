import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState: object = {};
const middleware: Array<any> = [thunk];


const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
  applyMiddleware(...middleware)
  )
);

export default store;
