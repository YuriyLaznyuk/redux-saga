import {take} from 'redux-saga/effects';

export default function* watchEducationSaga() {
	while (true) {
		yield take('CLICK');
		yield workerEducationSaga();
	}
}
export function* workerEducationSaga() {
	console.log('click from saga');
}
