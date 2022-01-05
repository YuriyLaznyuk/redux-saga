import {postsSaga} from './postsSaga/postsSaga';
import {all} from 'redux-saga/effects';
import watchEducationSaga from './educationSaga/educationSaga';

export function* rootSaga() {
	yield all([postsSaga(), watchEducationSaga()]);
}
