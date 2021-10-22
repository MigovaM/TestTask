import {combineReducers} from 'redux';
import eventsReducer from './event';

export default combineReducers({
  evenst: eventsReducer,
});
