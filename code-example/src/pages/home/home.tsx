import HeaderComponent from '../../components/header';
import PrefecturesComponent from './profectures/prefectures';
import { getPrefecturesStartAction } from '../../redux/actions/prefectures';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PopulationComponent from './population/population';
import { PrefecturesState } from '../../assets/interfaces/prefectures';
import { PopulationState } from '../../assets/interfaces/population';
import { ReduxState } from '../../assets/interface';
import React from 'react';

const Home = () => {
	const dispatch = useDispatch();

	const [prefectures, population]: [PrefecturesState, PopulationState] =
		useSelector((state: ReduxState) => [
			state.Prefectures,
			state.Population,
		]);

	// console.log(prefectures);
	// console.log(population);

	const fetchPrefectures = useCallback(() => {
		dispatch(getPrefecturesStartAction());
	}, [dispatch]);

	useEffect(() => {
		fetchPrefectures();
	}, [fetchPrefectures]);

	return (
		<>
			<HeaderComponent></HeaderComponent>
			<PrefecturesComponent
				prefectures={prefectures}
				population={population}
			></PrefecturesComponent>
			<PopulationComponent population={population}></PopulationComponent>
		</>
	);
};

export default Home;
