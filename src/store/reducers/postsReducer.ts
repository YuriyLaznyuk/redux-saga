import {PostAction, PostActionTypes, PostState} from '../../types/posts';

const initialState: PostState = {
	loading: false,
	posts: [],
	error: null,
};
export const postsReducer = (
	state = initialState,
	action: PostAction,
): PostState => {
	switch (action.type) {
		case PostActionTypes.FETCH_POST_REQUEST:
			return {...state, loading: true};
		case PostActionTypes.FETCH_POST_SUCCESS:
			return {...state, loading: false, posts: action.payload.posts};
		case PostActionTypes.FETCH_POST_ERROR:
			return {...state, loading: false, posts: [], error: action.payload.error};
		default:
			return state;
	}
};
