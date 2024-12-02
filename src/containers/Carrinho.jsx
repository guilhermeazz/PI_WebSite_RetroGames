import React from 'react';

import Nav from '../components/navbar';
import Footer from '../containers/Footer';
import Carrinho from '../components/carrinho';

const Home = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Nav />
            <div className=' flex flex-col flex-grow py-10 gap-10'>
                <Carrinho />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
