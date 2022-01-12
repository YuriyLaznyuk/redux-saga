import {postsSaga} from './postsSaga/postsSaga';
import {all, fork} from 'redux-saga/effects';
import watchEducationSaga from './educationSaga';
import {watcherEducationSaga2} from './educationSaga2';

// export function* rootSaga() {
// 	yield all([postsSaga(), watchEducationSaga()]);
// }

//********* way1 ********//
// export function* rootSaga() {
// 	yield [postsSaga(), watchEducationSaga()];
// }

//****** way2 *******//
export function* rootSaga() {
	yield all([
		fork(postsSaga),
		fork(watchEducationSaga),
		fork(watcherEducationSaga2),
	]);
}
