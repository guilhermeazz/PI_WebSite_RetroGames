import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/global/logo.png';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

const Nav = () => {
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();
    const authToken = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.nome_completo) {
            const firstName = user.nome_completo.split(' ')[0]; // Pega o primeiro nome
            setUserName(firstName);
        }
    }, []);

    const handleUserIconClick = () => {
        if (authToken) {
            navigate('/minha-conta');
        } else {
            navigate('/'); // Redireciona para a página de login quando não logado
        }
    };


    return (
        <>
            <nav className="bg-primary-1 px-4 flex justify-between items-center py-2 gap-6 ">
                <div className='bg-primary-2 pl-6 pr-32 rounded-xl'>
                    <div className='bg-primary-3 pl-6 pr-20 rounded-lg'>
                        <div className="bg-primary-4 p-2 rounded-lg" onClick={() => navigate('/home')}>
                            <img src={Logo} alt='logo da Retro Games' className="h-12 min-w-24" />
                        </div>
                    </div>
                </div>
                <div className="bg-primary-2 px-6 py-1 rounded-lg flex space-x-8 items-center w-full max-w-6xl justify-between font-extrabold ">
                    <div className="flex space-x-10 px-10">
                        <Link to="/home" className="text-lg text-white hover:underline">Home</Link>
                        <Link to="/jogos" className="text-lg text-white hover:underline">Jogos</Link>
                        <Link to="/categorias" className="text-lg text-white hover:underline">Categorias</Link>
                        <Link to="/sobre" className="text-lg text-white hover:underline">Sobre</Link>
                        <Link to="/" className="text-lg text-white hover:underline">Ajuda</Link>
                        <Link to="/favoritos" className="text-lg text-white hover:underline">Favoritos</Link>
                        {userName && (
                            <span className="text-white hover:text-primary-4">Seja bem-vindo, {userName}!</span>
                        )}
                    </div>
                    <div className="flex space-x-4">
                        <button 
                            className={`min-w-36 max-w-36 bg-primary-3 text-white p-2 rounded-lg ${authToken ? 'bg-green-500' : ''}`} 
                            onClick={handleUserIconClick}
                        >
                            {authToken ? 'Perfil' : 'Login/Cadastro'}
                        </button>
                        <div 
                            className="min-w-28 max-w-28 bg-primary-3 text-white p-2 rounded-lg flex items-center justify-center" 
                            onClick={() => navigate('/carrinho')}
                        >
                            <ShoppingCartIcon className="h-10 w-10" aria-label="Carrinho" />
                        </div>
                        
                    </div>

                </div>
            </nav>
            <div className='w-full h-5 bg-primary-5'></div>
        </>
    );
}

export default Nav;
