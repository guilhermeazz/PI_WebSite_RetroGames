import React from 'react';

import Nav from '../components/navbar';
import Banner from '../components/banner';
import Footer from '../containers/Footer';
import Jogos from '../components/ListaJogo';

const Home = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Nav />
            <div className=' flex flex-col flex-grow py-10 gap-10'>
                <Banner />
                <div className='container mx-auto px-4'>
                    <h2 className='text-3xl font-bold text-center mb-6'>Jogos de Destaque</h2>
                    <Jogos />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
