import React from 'react';
import {useNavigate} from 'react-router-dom';
import './educationSaga2.scss';
import {useDispatch, useSelector} from 'react-redux';
import {fetchRequestEducation2} from '../../store/reducers/educationReducer2';
import {RootState} from '../../store/reducers';

const EducationSaga2 = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const {loading, posts, error} = useSelector(
		(state: RootState) => state.education2,
	);
	return (
		<div className='educationSaga2'>
			<h1>EducationSaga2</h1>
			<button onClick={() => navigate('/')}>Home</button>
			<button onClick={() => dispatch(fetchRequestEducation2())}>Posts</button>
			{loading && <h1>...loading</h1>}
			{error && <h1>error posts user</h1>}
			<div className='educationSaga2__show'>
				{posts.length > 0 ? (
					posts.map((post) => (
						<div className='educationSaga2__show-post' key={post.id}>
							<strong>{post.title}</strong>: <span>{post.body}</span>
						</div>
					))
				) : (
					<h1>No post</h1>
				)}
			</div>
		</div>
	);
};

export default EducationSaga2;
