import { combineReducers } from 'redux';
import {reducer as form} from 'redux-form';
import authReducer from './auth_reducer';
import pollReducer from './poll_reducer';
import myPollsReducer from './my_polls_reducer';
import currentPollReducer from './current_poll_reducer';

const rootReducer = combineReducers({
  form: form,
  auth: authReducer,
  polls: pollReducer,
  myPolls: myPollsReducer,
  currentPoll: currentPollReducer
});

export default rootReducer;
