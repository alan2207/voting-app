import {FETCH_MY_POLLS, REMOVE_POLL} from '../actions/types';


export default function(state = [], action) {
    switch(action.type) {
        case FETCH_MY_POLLS:
            return [...action.payload]
        
        case REMOVE_POLL:
            return state.filter(poll => poll._id !== action.payload);
    }

    return state;
}
