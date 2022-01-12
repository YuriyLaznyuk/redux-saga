import {call, delay, all, fork, put, takeLeading} from 'redux-saga/effects';
import {Education2ActionTypes, IPostP} from '../../types/education2';
import {
	fetchErrorEducation2,
	fetchPostEducation2,
} from '../../store/reducers/educationReducer2';

//*****worker******//
function* auth() {
	yield delay(2000);
	console.log('auth ok');
	return true;
}

function* loadUsers() {
	try {
		const request: Promise<IPostP> = yield call(
			fetch,
			'https://jsonplaceholder.typicode.com/users/1/posts',
		);
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const data: IPostP[] = yield call([request, request.json]);
		console.log('data :', data);
		yield put(fetchPostEducation2(data));
	} catch (e) {
		console.log(e);
		yield put(fetchErrorEducation2());
	}
}

//******watcher******//

export function* watcherEducationSaga2() {
	// yield all([fork(loadUsers), fork(auth)]);

	yield all([
		takeLeading(Education2ActionTypes.FETCH_REQUEST_EDUCATION2, loadUsers),
		fork(auth),
	]);
}
