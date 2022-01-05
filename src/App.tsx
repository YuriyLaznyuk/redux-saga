import React from 'react';
import './app.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PostSaga from './pages/PoostSaga/PostSaga';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<div className='wrapper'>
				<Navigation />
				<Routes>
					<Route path='/' element={<Home name='home' />} />
					<Route path='/about' element={<About name='about' />} />
					<Route path='/saga' element={<PostSaga name='' />} />
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
