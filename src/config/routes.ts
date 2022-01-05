import {IRoute} from '../interfaces/routes';
import Home from '../pages/Home';
import About from '../pages/About';
import PostSaga from '../pages/PoostSaga/PostSaga';

const routes: IRoute[] = [
	{
		path: '/',
		name: 'Home',
		element: Home,
	},
	{
		path: '/about',
		name: 'About',
		element: About,
	},

	{
		path: '/saga',
		name: 'Saga',
		element: PostSaga,
	},
];
export default routes;
