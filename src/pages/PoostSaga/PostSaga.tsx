import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/reducers';
import {fetchPostRequest} from '../../actions/postActions';
import IPage from '../../interfaces/page';
import Navigation from '../../components/Navigation/Navigation';

const PostSaga = ({name}: IPage) => {
	const dispatch = useDispatch();
	const {posts, error, loading} = useSelector(
		(state: RootState) => state.posts,
	);
	return (
		<div>
			<Navigation />
			<h1>PostSaga {name}</h1>
			<div>
				<button onClick={() => dispatch(fetchPostRequest())}>get Post</button>
			</div>
			<div>
				{loading && <h2>...Loading</h2>}
				{error && <h2>{error}</h2>}
				{posts?.length > 0 ? (
					posts.map((i) => (
						<div key={i.id}>
							UserId: {i.userId}
							Title: {i.title} Body: {i.body}
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
