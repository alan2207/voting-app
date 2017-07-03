import {FETCH_POLLS, CREATE_POLL} from '../actions/types';




export default function(state = [], action) {
    switch(action.type) {
        case FETCH_POLLS:
            return [...action.payload];

        case CREATE_POLL:
            return state.concat(action.payload);

        
        // case ADD_OPTION:
        //     return {...state, polls: polls.map(poll => {
        //         if(action.payload.id.toString() === poll._id.toString) {
        //             return {...state.poll, poll.options.concat([{option: action.payload.option, value: 0}])};
        //         }
        //         return poll
        //     })}
    }

    return state;
}

