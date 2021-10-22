import {
  GET_EVENTS_SUCCESS,
  GET_EVENTS_REQUEST,
  GET_EVENTS_ERROR,
} from '../constants/constants';
import {ActionsTypes} from '../constants/constants';
import {IEvent} from '../../services/interfaces/index.interfaces';

export function getEventsRequest(): ActionsTypes {
  return {
    type: GET_EVENTS_REQUEST,
  };
}

export function getEventsSuccess(events: IEvent[] | undefined): ActionsTypes {
  return {
    type: GET_EVENTS_SUCCESS,
    payload: events,
  };
}

export function getEventsError(): ActionsTypes {
  return {
    type: GET_EVENTS_ERROR,
  };
}
