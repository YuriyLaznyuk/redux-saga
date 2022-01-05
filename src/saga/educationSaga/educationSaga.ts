import {take} from 'redux-saga/effects';
export default function* watchEducationSaga() {
	while (true) {
		yield take('CLICK');
		console.log('click from saga');
	}
}
export function* workerEducationSaga() {
	console.log('pppp');
}
