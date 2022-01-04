import React, {useEffect} from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import Navigation from '../components/Navigation/Navigation';

const About = ({name}: IPage) => {
	useEffect(() => {
		logging.info(`loading ${name}`);
	});
	return (
		<div>
			<Navigation />
			<h2>This is the ABOUT page</h2>
		</div>
	);
};

export default About;
