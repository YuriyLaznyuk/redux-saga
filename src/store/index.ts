import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import {rootReducer} from './reducers';
import {rootSaga} from '../saga/rootSaga';
import {composeWithDevTools} from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
export const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
	rootReducer,

	composeWithDevTools(applyMiddleware(sagaMiddleware, logger)),
);
sagaMiddleware.run(rootSaga);
