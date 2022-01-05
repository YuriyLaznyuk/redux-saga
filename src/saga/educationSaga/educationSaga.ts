import {takeEvery, put, call, select} from 'redux-saga/effects';
import {EducationActionType} from '../../types/education';
import {RootState} from '../../store/reducers';
import {PostState} from '../../types/posts';
import {
	fetchPeopleError,
	fetchPeopleSuccess,
} from '../../store/reducers/educationReducer';

const getPeople = async () => {
	const response = await fetch('https://swapi.dev/api/people/');
	return await response.json();
};
interface IData {
	count: number;
	next: string;
	previous: any;
	results: [];
}

// const wait = () =>
// 	new Promise((resolve) => {
// 		setTimeout(resolve, 1000);
// 	});

export function* workerEducationSaga() {
	try {
		// yield wait();
		// console.log('click from saga');
		// const data: IData = yield getPeople();
		const data: IData = yield call(getPeople);
		//--------------
		// yield put({
		// 	type: EducationActionType.FETCH_PEOPLE_SUCCESS,
		// 	payload: data.results,
		// });
		//
		yield put(fetchPeopleSuccess(data.results));

		const store: PostState = yield select((state: RootState) => state.posts);
		console.log(store);
	} catch (e) {
		yield put(fetchPeopleError());
	}
}

export default function* watchEducationSaga() {
	// while (true) {
	// 	yield take('CLICK');
	// 	yield workerEducationSaga();
	// }

	// yield takeEvery('CLICK', workerEducationSaga);
	yield takeEvery(
		EducationActionType.FETCH_PEOPLE_REQUEST,
		workerEducationSaga,
	);
}
