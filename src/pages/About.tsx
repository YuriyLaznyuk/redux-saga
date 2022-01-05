import React, {useEffect} from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';

const About = ({name}: IPage) => {
	useEffect(() => {
		logging.info(`loading ${name}`);
	});
	return (
		<div>
			<h2>This is the ABOUT page</h2>
		</div>
	);
};

export default About;
