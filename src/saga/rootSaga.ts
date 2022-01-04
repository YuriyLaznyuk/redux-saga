import {postsSaga} from './postsSaga/postsSaga';
import {all} from 'redux-saga/effects';

export function* rootSaga() {
	yield all([postsSaga()]);
}
