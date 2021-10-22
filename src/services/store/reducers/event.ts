import {
  GET_EVENTS_REQUEST,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_ERROR,
  IStateLoading,
} from '../constants/constants';
import setRequestState from './setRequestsState';
import {ActionsTypes, ActionSuccess} from '../constants/constants';
import {IEvent} from '../../interfaces/index.interfaces';

interface IState extends IStateLoading {
  events: IEvent[];
}

const initialState: IState = {
  events: [],
  isLoading: false,
  loaded: false,
  error: false,
};

function eventsReducer(
  state: IState = initialState,
  action: ActionsTypes,
): IState {
  switch (action.type) {
    case GET_EVENTS_REQUEST: {
      return {...state, ...setRequestState('request')};
    }
    case GET_EVENTS_SUCCESS: {
      const events = (action as ActionSuccess).payload;

      return {...state, events, ...setRequestState('success')};
    }
    case GET_EVENTS_ERROR: {
      return {...state, ...setRequestState('error')};
    }
    default:
      return state;
  }
}

export default eventsReducer;
