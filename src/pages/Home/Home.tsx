import React, { useEffect } from 'react';
import { People } from '@/data/people';

import { useDispatch } from 'react-redux';
import { addPeople } from '@/redux/states';

import PeopleTable from './components/PeopleTable';

export type HomeInterface = {
	// types...
}

const Home: React.FC<HomeInterface> = () => {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(addPeople(People))
	}, [])

	return (

		<PeopleTable />

	);
};

export default Home;
