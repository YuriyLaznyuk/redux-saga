import {
	FetchPostRequest,
	FetchPostSuccess,
	PostActionTypes,
	FetchPostError,
	FetchPostsErrorPayload,
	FetchPostsSuccessPayload,
} from '../types/posts';

export const fetchPostRequest = (): FetchPostRequest => ({
	type: PostActionTypes.FETCH_POST_REQUEST,
});
export const fetchPostSuccess = (
	payload: FetchPostsSuccessPayload,
): FetchPostSuccess => ({
	type: PostActionTypes.FETCH_POST_SUCCESS,
	payload,
});

export const fetchPostError = (
	payload: FetchPostsErrorPayload,
): FetchPostError => ({
	type: PostActionTypes.FETCH_POST_ERROR,
	payload,
});
