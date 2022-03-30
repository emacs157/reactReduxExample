import HeaderComponent from '../../components/header';
import PrefecturesComponent from './profectures/prefectures';
import PopulationComponent from './population/population';
import React from 'react';
import { mockRedux } from '../../mockData/mockRedux';

const Home = () => {
    const prefectures = mockRedux.Prefectures;
    const population = mockRedux.Population;

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
