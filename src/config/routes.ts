import {IRoute} from '../interfaces/routes';
import Home from '../pages/Home';
import About from '../pages/About';

const routes: IRoute[] = [
	{path: '/', name: 'Home', component: Home, exact: true},
	{path: '/about', name: 'About', component: About, exact: true},
];

export default routes;
