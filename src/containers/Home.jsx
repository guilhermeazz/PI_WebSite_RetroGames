import React from 'react';

import Nav from '../components/navbar';
import Banner from '../components/banner';

const Home = () => {
    return (
        <>
            <Nav />
            <div>
                <Banner />
                <h1>Dados da homepage</h1>
            </div>
        </>
    );
}

export default Home;
