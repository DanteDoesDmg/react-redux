import {FETCH_POSTS, NEW_POST} from '../actions/types';
import {action} from '../components/Interfaces'
const initialState:object = {
    items: [],
    item: {}
}

export default function(state = initialState, action:action){
    console.log('henlo',action);
    switch(action.type){
    
        case FETCH_POSTS:
            return {
                ...state,
                items:action.payload
            }
        default:
            console.log('here')
            return state
    }
}
