import {IEvent} from '../../services/interfaces/index.interfaces';

export const GET_EVENTS_REQUEST = 'GET_EVENTS_REQUEST';
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
export const GET_EVENTS_ERROR = 'GET_EVENTS_ERROR';

export interface IStateLoading {
  isLoading: boolean;
  loaded: boolean;
  error: boolean;
}

interface ActionRequest {
  type: string;
}

export interface ActionSuccess {
  type: string;
  payload: IEvent[];
}

export type ActionsTypes = ActionRequest | ActionSuccess;
