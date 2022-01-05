import React, {useEffect} from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';

const Home = ({name = 'Home'}: IPage) => {
	useEffect(() => {
		logging.info(`Loading ${name}`);
	}, []);
	return (
		<div>
			<h1>Tis is home page</h1>
		</div>
	);
};

export default Home;
