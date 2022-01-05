import {combineReducers} from 'redux';
import {postsReducer} from './postsReducer';
import {educationReducer} from './educationReducer';
export const rootReducer = combineReducers({
	posts: postsReducer,
	education: educationReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
