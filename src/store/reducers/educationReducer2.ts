import {
	Education2Action,
	Education2ActionTypes,
	EducationState2,
	IPostP,
} from '../../types/education2';

const initialState: EducationState2 = {
	age: '',
	name: '',
	posts: [],
	loading: false,
	error: false,
};

export const educationReducer2 = (
	state = initialState,
	action: Education2Action,
) => {
	switch (action.type) {
		case Education2ActionTypes.FETCH_POSTS_EDUCATION2:
			return {...state, posts: action.payload, error: false, loading: false};
		case Education2ActionTypes.FETCH_REQUEST_EDUCATION2:
			return {...state, loading: true};
		case Education2ActionTypes.FETCH_ERR0R_EDUCATION2:
			return {...state, error: true};
		default:
			return state;
	}
};

export const fetchPostEducation2 = (payload: IPostP[]) => ({
	type: Education2ActionTypes.FETCH_POSTS_EDUCATION2,
	payload,
});

export const fetchRequestEducation2 = () => ({
	type: Education2ActionTypes.FETCH_REQUEST_EDUCATION2,
});

export const fetchErrorEducation2 = () => ({
	type: Education2ActionTypes.FETCH_ERR0R_EDUCATION2,
});
