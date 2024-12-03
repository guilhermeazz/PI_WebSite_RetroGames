import React from 'react';

import Nav from '../components/navbar';
import Footer from '../containers/Footer';
import Jogos from '../components/JogoFiltrado';

const Home = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Nav />
            <div className=' flex flex-col flex-grow py-10 gap-10'>
                <Jogos />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
