import {GET_CURRENT_POLL, VOTE, ADD_OPTION} from '../actions/types';

export default function(state = {}, action) {
    switch(action.type) {
        case GET_CURRENT_POLL:
            return action.payload;

        case VOTE:
            return {...state, options: updateResults(state, action.option)} 

        case ADD_OPTION:
            return {...state, options: state.options.concat([action.payload])}

        
    }
    return state;

}

function updateResults(obj, choice) {
    var arr = [];
    for(var i = 0; i < obj.options.length; i++) {
        if(obj.options[i].option === choice) {
            obj.options[i].value++;
        }
        arr.push(obj.options[i]);
    }
    return arr;
}


