import { combineReducers } from "redux";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
  posts: postReducer
});
export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;
