import {EducationState} from '../../types/education';

const initialState: EducationState = {loading: false, data: [], error: false};

export const educationReducer = (state = initialState, action: any) => {
	switch (action.type) {
		default:
			return state;
	}
};
