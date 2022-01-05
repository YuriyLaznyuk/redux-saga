export interface EducationState {
	loading: boolean;
	data: any;
	error: boolean;
}
export enum EducationActionType {
	FETCH_PEOPLE_REQUEST = 'FETCH_PEOPLE_REQUEST',
	FETCH_PEOPLE_SUCCESS = 'FETCH_PEOPLE_SUCCESS',
	FETCH_PEOPLE_ERROR = 'FETCH_PEOPLE_ERROR',
}
