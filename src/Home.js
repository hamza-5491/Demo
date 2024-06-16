import React from 'react'
import Hero from './Hero';
import Cards3 from './Homepage-components/Cards3';
import RightStrategies from './Homepage-components/RightStrategies';
import SolvingProblem from './Homepage-components/SolvingProblem';
import YourVision from './Homepage-components/YourVision';
import RecentWork from './Homepage-components/RecentWork';
import Client from './Homepage-components/Client';

const Home = () => {
    return (
        <>
            <Hero />
            <Cards3 />
            <RightStrategies />
            <SolvingProblem />
            <YourVision />
            <RecentWork />
            <Client />
        </>
    )
}

export default Home
