import React from 'react';

import Nav from '../components/navbar';
import Box from '../components/ListaJogo';
import Footer from '../containers/Footer';

const Jogos = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Nav />
            <div className='flex-grow py-10'>
                <Box />
                
            </div>
            <Footer />
        </div>
    );
}

export default Jogos;
