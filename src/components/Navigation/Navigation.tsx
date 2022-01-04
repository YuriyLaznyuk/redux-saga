import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
	return (
		<nav>
			<Link to='/'>Home</Link>
			<Link to='/about'>About</Link>
			<Link to='/saga'>PostSaga</Link>
		</nav>
	);
};

export default Navigation;
