import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/global/logo.png';
import { MagnifyingGlassCircleIcon, ShoppingCartIcon, UserIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/solid';

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
            navigate('/');
        }
    };

    return (
        <>
            <nav className="bg-primary-1 px-4 flex justify-between items-center py-2 gap-6 ">
                <div className='bg-primary-2 pl-6 pr-40 rounded-xl'>
                    <div className='bg-primary-3 pl-6 pr-20 rounded-lg'>
                        <div className="bg-primary-4 p-2 rounded-lg" onClick={() => navigate('/home')}>
                            <img src={Logo} alt='logo da Retro Games' className="h-12 min-w-24" />
                        </div>
                    </div>
                </div>
                <div className="bg-primary-2 px-6 py-1 rounded-lg flex space-x-4 items-center w-full max-w-6xl">
                    <input type="text" className="p-2 rounded-md w-full" placeholder="Buscar..." />
                    <button aria-label="Buscar">
                        <MagnifyingGlassCircleIcon className="h-10 w-10 text-white fill-current" />
                    </button>

                    <div className="bg-primary-3 text-white p-2 rounded-lg" onClick={() => navigate('/suporte')}>
                        <ChatBubbleLeftIcon className="h-10 w-10" aria-label="Chat" />
                    </div>
                    <div className={`bg-primary-3 text-white p-2 rounded-lg ${authToken ? 'bg-green-500' : ''}`} onClick={handleUserIconClick}>
                        <UserIcon className="h-10 w-10" aria-label="Perfil" />
                    </div>
                    <div className="bg-primary-3 text-white p-2 rounded-lg" onClick={() => navigate('/carrinho')}>
                        <ShoppingCartIcon className="h-10 w-10" aria-label="Carrinho" />
                    </div>
                </div>
            </nav>

            <div className="bg-gray-900 py-2 flex justify-around space-x-6 - px-20">
                <Link to="/home" className="text-white hover:underline">Home</Link>
                <Link to="/jogos" className="text-white hover:underline">Jogos</Link>
                <Link to="/categorias" className="text-white hover:underline">Categorias</Link>
                {userName && (
                    <span className="text-white hover:text-primary-4">Seja bem-vindo, {userName}!</span>
                )}
            </div>
        </>
    );
}

export default Nav;
