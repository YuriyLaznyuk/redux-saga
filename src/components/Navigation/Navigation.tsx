import React from 'react';
import {Link, useLocation, useSearchParams} from 'react-router-dom';
import './navigation.scss';

const Navigation = () => {
	const {pathname} = useLocation();
	const params = useSearchParams();
	console.log('pathname: ', pathname);
	console.log('params: ', params);
	const getActive = (pathname: string, path: string): string =>
		pathname === path ? 'active' : '';
	return (
		<nav className='navigation'>
			<Link className={getActive(pathname, '/')} to='/'>
				Home
			</Link>
			<Link className={getActive(pathname, '/about')} to='/about'>
				About
			</Link>
			<Link className={getActive(pathname, '/saga')} to='/saga'>
				PostSaga
			</Link>
			<Link className={getActive(pathname, '/education')} to='/education'>
				EducationSaga
			</Link>
			<Link className={getActive(pathname, '/education2')} to='/education2'>
				EducationSaga2
			</Link>
		</nav>
	);
};

export default Navigation;
