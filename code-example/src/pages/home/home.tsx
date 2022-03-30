import HeaderComponent from '../../components/header';
import PrefecturesComponent from './profectures/prefectures';
import PopulationComponent from './population/population';
import React from 'react';
import { mockRedux } from '../../mockData/mockRedux';
import { PopulationState } from '../../assets/interfaces/population';
import { PrefecturesState } from '../../assets/interfaces/prefectures';

const Home = () => {
    const prefectures: PrefecturesState = mockRedux.Prefectures;
    const population: PopulationState = mockRedux.Population;

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
