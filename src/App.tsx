import React from 'react';
import './app.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PostSaga from './pages/PoostSaga/PostSaga';

const App: React.FC = () => {
	return (
		<div className='wrapper'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home name='home' />} />
					<Route path='/about' element={<About name='about' />} />
					<Route path='/saga' element={<PostSaga name='' />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
