import React from 'react';
import './app.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PostSaga from './pages/PoostSaga/PostSaga';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import EducationSaga from './pages/EducationSaga/EducationSaga';

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<div className='wrapper'>
				<Navigation />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About name={'About test'} />} />
					<Route path='/saga' element={<PostSaga />} />
					<Route path='/education' element={<EducationSaga />} />
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
