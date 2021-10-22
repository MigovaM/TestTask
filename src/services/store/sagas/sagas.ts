import {call, put, takeEvery} from 'redux-saga/effects';
import {getEventsSuccess, getEventsError} from '../actions/actions';
import {GET_EVENTS_REQUEST} from '../constants/constants';
import {ItemsApi} from '../../API/API';
import {IEvent} from '../../interfaces/index.interfaces';

function* getEvents(): Generator {
  try {
    const tasks: any = yield call(ItemsApi.getItems);
    const result = tasks.map((item: any) => ({
      id: item.id,
      actor: {...item.actor},
    }));

    yield put(getEventsSuccess(result as IEvent[] | undefined));
  } catch {
    yield put(getEventsError());
  }
}

export default function* mySaga(): Generator {
  yield takeEvery(GET_EVENTS_REQUEST, getEvents);
}
