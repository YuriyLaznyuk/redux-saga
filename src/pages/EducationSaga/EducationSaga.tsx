import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPeopleRequest} from '../../store/reducers/educationReducer';
import {RootState} from '../../store/reducers';
import './educationSaga.scss';

type People = {
	name: string;
	mass: string;
};

const EducationSaga = () => {
	const {loading, error, data} = useSelector(
		(state: RootState) => state.education,
	);
	const dispatch = useDispatch();
	return (
		<div className='educationSaga'>
			<h1>Education Saga</h1>
			<button onClick={() => dispatch(fetchPeopleRequest())}>Click Mi</button>
			<div className='educationSaga__show'>
				{loading && <h1>...loading People</h1>}
				{error && <h1>error loading People</h1>}
				{data?.length > 0 ? (
					data.map((i: People) => (
						<div className='educationSaga__show-item' key={i.name}>
							{i.name} --- {i.mass}
						</div>
					))
				) : (
					<h1>No People</h1>
				)}
			</div>
		</div>
	);
};

export default EducationSaga;
