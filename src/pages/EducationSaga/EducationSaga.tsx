import React from 'react';
import {useDispatch} from 'react-redux';

const EducationSaga = () => {
	// const store = useSelector((state: RootState) => state.education);
	const dispatch = useDispatch();
	return (
		<div>
			<h1>Education Saga</h1>
			<button onClick={() => dispatch({type: 'CLICK'})}>Click Mi</button>
		</div>
	);
};

export default EducationSaga;
