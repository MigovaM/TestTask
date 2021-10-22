import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import 'regenerator-runtime/runtime';
import mySaga from './sagas/sagas';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

export type RootState = ReturnType<typeof store.getState>;
