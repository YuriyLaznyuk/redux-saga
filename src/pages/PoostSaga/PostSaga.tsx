import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/reducers';
import {fetchPostRequest} from '../../actions/postActions';
import IPage from '../../interfaces/page';
import './postSaga.scss';

const PostSaga = ({name}: IPage) => {
	const dispatch = useDispatch();
	const {posts, error, loading} = useSelector(
		(state: RootState) => state.posts,
	);
	return (
		<div className='postSaga'>
			<h1>PostSaga {name}</h1>
			<div className='postSaga__buttons'>
				<button
					className='postSaga__buttons-btn'
					onClick={() => dispatch(fetchPostRequest())}>
					get Post
				</button>
			</div>
			<div className='postSaga__blockPosts'>
				{loading && <h2>...Loading</h2>}
				{error && <h2>{error}</h2>}
				{posts?.length > 0 ? (
					posts.map((i) => (
						<div className='postSaga__blockPosts-post' key={i.id}>
							<strong>UserId:</strong> {i.userId} &nbsp;
							<strong>Title:</strong> {i.title} &nbsp; <strong>Body:</strong>{' '}
							{i.body}
						</div>
					))
				) : (
					<h2>No posts</h2>
				)}
			</div>
		</div>
	);
};

export default PostSaga;
