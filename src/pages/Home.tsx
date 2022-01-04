import React, {useEffect} from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import Navigation from '../components/Navigation/Navigation';

const Home = ({name}: IPage) => {
	useEffect(() => {
		logging.info(`Loading ${name}`);
	}, []);
	return (
		<div>
			<Navigation />
			<h1>Tis is home page</h1>
		</div>
	);
};

export default Home;
