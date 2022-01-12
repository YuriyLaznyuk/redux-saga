export interface IPostP {
	userId: number;
	id: number;
	title: string;
	body: string;
}
export interface EducationState2 {
	name: string;
	age: string;
	posts: IPostP[];
	loading: boolean;
	error: boolean;
}

export enum Education2ActionTypes {
	FETCH_REQUEST_EDUCATION2 = 'FETCH_REQUEST_EDUCATION2',
	FETCH_POSTS_EDUCATION2 = 'FETCH_POSTS_EDUCATION2',
	FETCH_ERR0R_EDUCATION2 = 'FETCH_ERR0R_EDUCATION2',
}

export interface FetchPostEducation2 {
	type: Education2ActionTypes.FETCH_POSTS_EDUCATION2;
	payload: IPostP[];
}

export interface FetchRequestEducation2 {
	type: Education2ActionTypes.FETCH_REQUEST_EDUCATION2;
}
export interface FetchErrorEducation2 {
	type: Education2ActionTypes.FETCH_ERR0R_EDUCATION2;
}

export type Education2Action =
	| FetchPostEducation2
	| FetchErrorEducation2
	| FetchRequestEducation2;
