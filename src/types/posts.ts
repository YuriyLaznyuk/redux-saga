export enum PostActionTypes {
	FETCH_POST_REQUEST = 'FETCH_POST_REQUEST',
	FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS',
	FETCH_POST_ERROR = 'FETCH_POST_ERROR',
}
export interface IPost {
	userId: number;
	id: number;
	title: string;
	body: string;
}
export interface PostState {
	loading: boolean;
	posts: IPost[];
	error: string | null;
}

export interface FetchPostRequest {
	type: PostActionTypes.FETCH_POST_REQUEST;
}
export interface FetchPostSuccess {
	type: PostActionTypes.FETCH_POST_SUCCESS;
	payload: FetchPostsSuccessPayload;
}
export interface FetchPostError {
	type: PostActionTypes.FETCH_POST_ERROR;
	payload: FetchPostsErrorPayload;
}

export interface FetchPostsSuccessPayload {
	posts: IPost[];
}

export interface FetchPostsErrorPayload {
	error: string;
}

export type PostAction = FetchPostError | FetchPostRequest | FetchPostSuccess;
