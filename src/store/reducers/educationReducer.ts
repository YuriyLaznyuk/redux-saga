import {EducationActionType, EducationState} from '../../types/education';

const initialState: EducationState = {loading: false, data: [], error: false};

export const educationReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case EducationActionType.FETCH_PEOPLE_REQUEST:
			return {...state, loading: true};
		case EducationActionType.FETCH_PEOPLE_SUCCESS:
			return {...state, data: action.payload, loading: false, error: false};
		case EducationActionType.FETCH_PEOPLE_ERROR:
			return {...state, error: true, loading: false};
		default:
			return state;
	}
};

export const fetchPeopleSuccess = (payload: any) => ({
	type: EducationActionType.FETCH_PEOPLE_SUCCESS,
	payload,
});
export const fetchPeopleRequest = () => ({
	type: EducationActionType.FETCH_PEOPLE_REQUEST,
});

export const fetchPeopleError = () => ({
	type: EducationActionType.FETCH_PEOPLE_ERROR,
});
