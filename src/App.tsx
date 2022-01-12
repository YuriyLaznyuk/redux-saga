import React from 'react';
import './app.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import {createBrowserHistory} from 'history';
import Home from './pages/Home';
import About from './pages/About';
import PostSaga from './pages/PoostSaga/PostSaga';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import EducationSaga from './pages/EducationSaga/EducationSaga';
import EducationSaga2 from './pages/EducationSaga2/EducationSaga2';

const App: React.FC = () => {
	// const history = createBrowserHistory();
	return (
		<BrowserRouter>
			<div className='wrapper'>
				<Navigation />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About name={'About test'} />} />
					<Route path='/saga' element={<PostSaga />} />
					<Route path='/education' element={<EducationSaga />} />
					<Route path='/education2' element={<EducationSaga2 />} />
					<Route path='*' element={<h1>Not Found Page</h1>} />
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
