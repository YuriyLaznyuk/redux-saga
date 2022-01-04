import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import {rootReducer} from './reducers';
import {rootSaga} from '../saga/rootSaga';
export const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
	rootReducer,
	applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);
