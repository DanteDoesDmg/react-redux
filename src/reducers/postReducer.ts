import { FETCH_POSTS, NEW_POST, PostAction } from "../actions/types";

export interface State {
  items: Array<any>;
  item: object;
}
const initialState: State = {
  items: [],
  item: {}
};

export default function(state = initialState, action: PostAction) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
      case NEW_POST:
          return{
              ...state,
              item:action.payload
          }
    default:
      return {
        ...state
      };
  }
}
