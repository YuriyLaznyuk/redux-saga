import React from 'react';
import './app.scss';
import {useDispatch} from 'react-redux';
import {fetchPostRequest} from './actions/postActions';
import {useTypedSelector} from './hooks/useaTypedSelector';

const App: React.FC = () => {
	const dispatch = useDispatch();
	// const {posts, loading, error} = useSelector(
	// 	(state: RootState) => state.posts,
	// );

	const {posts, loading, error} = useTypedSelector((state) => state.posts);

	// useEffect(() => {
	// 	dispatch(fetchPostRequest());
	// 	console.log(posts);
	// }, []);
	console.log(loading);
	return (
		<div className='wrapper'>
			<div>
				<button onClick={() => dispatch(fetchPostRequest())}>Show Posts</button>
			</div>
			<h1>Redux-Saga</h1>
			{loading && <h2>...loading</h2>}
			{error && <h2>{error}</h2>}
			{posts?.length > 0 ? (
				posts?.map((i) => (
					<div className='wrapper__post' key={i.id}>
						<div className='wrapper__post-item'>UserId: {i.userId}</div>
						<div className='wrapper__post-item'>Title: {i.title}</div>
						<div className='wrapper__post-item'>Body: {i.body}</div>
					</div>
				))
			) : (
				<h2>No posts</h2>
			)}
		</div>
	);
};

export default App;
