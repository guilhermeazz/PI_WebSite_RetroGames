import React from 'react';

import Nav from '../components/navbar';
import Categoria from '../components/cat';
import Footer from '../containers/Footer';

const Categorias = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Nav />
            <div className='flex-grow py-10'>
                <Categoria />
                
            </div>
            <Footer />
        </div>
    );
}

export default Categorias;
