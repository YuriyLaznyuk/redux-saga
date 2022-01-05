import axios from 'axios';
import {all, call, put, takeLatest} from 'redux-saga/effects';
import {IPost, PostActionTypes} from '../../types/posts';
import {fetchPostError, fetchPostSuccess} from '../../actions/postActions';

const getPosts = () =>
	axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
//worker
function* fetchPostsSaga() {
	try {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const response = yield call(getPosts);
		yield put(
			fetchPostSuccess({
				posts: response.data,
			}),
		);
	} catch (e) {
		yield put(
			fetchPostError({
				error: 'Error Loading Posts',
			}),
		);
	}
}
// watcher
export function* postsSaga() {
	yield all([takeLatest(PostActionTypes.FETCH_POST_REQUEST, fetchPostsSaga)]);
}
