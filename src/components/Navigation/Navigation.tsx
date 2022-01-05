import React from 'react';
import {Link} from 'react-router-dom';
import './navigation.scss';

const Navigation = () => {
	return (
		<nav className='navigation'>
			<Link to='/'>Home</Link>
			<Link to='/about'>About</Link>
			<Link to='/saga'>PostSaga</Link>
		</nav>
	);
};

export default Navigation;
