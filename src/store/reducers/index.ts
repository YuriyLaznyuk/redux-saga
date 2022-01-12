import {combineReducers} from 'redux';
import {postsReducer} from './postsReducer';
import {educationReducer} from './educationReducer';
import {educationReducer2} from './educationReducer2';
export const rootReducer = combineReducers({
	posts: postsReducer,
	education: educationReducer,
	education2: educationReducer2,
});
export type RootState = ReturnType<typeof rootReducer>;
