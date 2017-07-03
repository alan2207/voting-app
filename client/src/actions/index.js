import axios from 'axios';
import {browserHistory} from 'react-router';
import {AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_POLLS, FETCH_MY_POLLS, VOTE, GET_CURRENT_POLL, CREATE_POLL, REMOVE_POLL, ADD_OPTION} from './types';


// set this to url of the backend server
const ROOT_URL = 'http://localhost:8081';


//=======================================
// USERS ACTIONS
//=======================================

// handling logging in
export function signinUser({email, password}, context) {
    return (dispatch) => {
        axios.post(`${ROOT_URL}/signin`, {email, password})
        .then(response => {
            
            dispatch({type: AUTH_USER});

            localStorage.setItem('token', response.data.token);

            context.props.history.push('/');
        })
        .catch(() => {
            dispatch(authError('Signing in failed!!!'));
        })
    }
}

// handling signing up - creating a new user
export function signupUser({email, password}, context) {
    return (dispatch) => {
        axios.post(`${ROOT_URL}/signup`, {email, password})
        .then(response => {
            
            dispatch({type: AUTH_USER});
            localStorage.setItem('token', response.data.token);
            context.props.history.push('/');
        })
        .catch(response => {
            dispatch(authError(response.response.data.error))
        })
        
    }
}


// handling errors from the server
export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}


// handling logging out
export function signoutUser(context) {
    return (dispatch) => {
        localStorage.removeItem('token');
        dispatch({type: UNAUTH_USER});
        setTimeout(() => {
            context.props.history.push('/');
        }, 1500);
    }
}




//===================================================
// POLLS ACTIONS
//===================================================

// getting all polls from the server
export function fetchpolls() {
    return (dispatch) => {
        axios.get(`${ROOT_URL}/polls/`)
            .then(response => {
                dispatch({type: FETCH_POLLS, payload: response.data})
            })
            .catch(err => console.log('couldnt fetch polls'));
    }
}

// handling voting, updates value of a option - for unatuhenticated users
export function vote(option, id) {
    return (dispatch) => {
        axios.post(`${ROOT_URL}/polls/${id}/vote`, {option})
            .then((response) => {
                if(response.data.voted) {
                    dispatch({type: VOTE, id: id, option: option});
                    Materialize.toast('Thanks for voting.', 4000);
                } else {
                    Materialize.toast('You can vote only once per IP adress.', 4000)
                }
            })
    }
}

// handle voting, updates value of a option - for authenticated users
// needs to pass token to identify the user on the server
export function voteAuth(option, id) {
    return (dispatch) => {
        axios.post(`${ROOT_URL}/polls/${id}/voteauth`, {option}, {headers: {
            authorization: localStorage.getItem('token')
        }})
            .then((response) => {
                if(response.data.voted) {
                    dispatch({type: VOTE, id: id, option: option});
                    Materialize.toast('Thanks for voting.', 4000);
                } else {
                    Materialize.toast('You can vote only once per account.', 4000)
                }
            })
    }
}

// getting current poll, finds it by the poll id
export function getCurrentPoll(id) {
    return (dispatch) => {
        axios.get(`${ROOT_URL}/polls/${id}`)
            .then(response => {
                dispatch({type: GET_CURRENT_POLL, payload: response.data})
            })
    }
}

// handling poll creation
export function createPoll({title, options}, context) {
    return (dispatch) => {
        axios.post(`${ROOT_URL}/createpoll`, {title, options}, {headers: {
            authorization: localStorage.getItem('token')
        }})
            .then((response) => {
                dispatch({type: CREATE_POLL, payload: response.data});
                context.props.history.push('/');
            })
    }
}

// fetching polls created by authenticated user
export function fetchMyPolls() {
    return (dispatch) => {
        axios.get(`${ROOT_URL}/mypolls`, {headers: {
            authorization: localStorage.getItem('token')
        }})
            .then(response => {
                dispatch({type: FETCH_MY_POLLS, payload: response.data});
            })
    }
}


// handling poll removal by authenticated user
export function removePoll(id) {
    return (dispatch) => {
        axios.delete(`${ROOT_URL}/removepoll/${id}`, {headers: {
            authorization: localStorage.getItem('token')
        }})
            .then(() => {
                dispatch({type: REMOVE_POLL, payload: id});
                Materialize.toast('Poll removed.', 4000)
            })
            .catch(err => console.log(err))
    }
}


// handling option adding
export function addOption({option}, id) {
    return (dispatch) => {
        axios.post(`${ROOT_URL}/polls/${id}/addoption`,{option}, {headers: {
            authorization: localStorage.getItem('token')
        }})
            .then((response) => {
                if(!response.data.failed) {
                    dispatch({type: ADD_OPTION, payload: response.data});
                    Materialize.toast('Option added.', 4000)
                }
                else {
                    Materialize.toast('This option already exists.', 4000)
                }
            })
    }
}