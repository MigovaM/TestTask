import {call, put, takeEvery} from 'redux-saga/effects';
import {getEventsSuccess, getEventsError} from '../actions/actions';
import {GET_EVENTS_REQUEST} from '../constants/constants';
import {ItemsApi} from '../../services/API/ItemsAPI';
import {IEvent} from '../../services/interfaces/index.interfaces';

function* getEvents(): Generator {
  try {
    const items = yield call(ItemsApi.getItems);
    const result = (items as IEvent[]).map(item => ({
      id: item.id,
      actor: {...item.actor},
    }));

    yield put(getEventsSuccess(result as IEvent[]));
  } catch {
    yield put(getEventsError());
  }
}

export default function* mySaga(): Generator {
  yield takeEvery(GET_EVENTS_REQUEST, getEvents);
}
