import React from 'react';
import Logo from '../assets/logo.png'
import { MagnifyingGlassCircleIcon, ShoppingCartIcon, UserIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/solid';


const Nav = () => {
    return (
        <nav className="bg-primary-1 px-4 py-1.5 flex justify-between items-center py-2 gap-6">
            <div className='bg-primary-2 pl-6 pr-40 rounded-xl'>
                <div className='bg-primary-3 pl-6 pr-20 rounded-lg'>
                    <div className="bg-primary-4 p-2 rounded-lg">
                        <img src={Logo} alt='logo da Retro Games' className="h-12 min-w-24"/>
                    </div>
                </div>
            </div>
            <div className="bg-primary-2 px-6 py-1 rounded-lg flex space-x-4 items-center w-full max-w-6xl">
                <input type="text" className="p-2 rounded-md w-full" placeholder="Buscar..." />
                <button aria-label="Buscar">
                    <MagnifyingGlassCircleIcon className="h-10 w-10 text-white fill-current" />
                </button>

                <div className="bg-primary-3 text-white p-2 rounded-lg">
                    <ChatBubbleLeftIcon className="h-10 w-10" aria-label="Chat" />
                </div>
                <div className="bg-primary-3 text-white p-2 rounded-lg">
                    <UserIcon className="h-10 w-510" aria-label="Perfil" />
                </div>
                <div className="bg-primary-3 text-white p-2 rounded-lg">
                    <ShoppingCartIcon className="h-10 w-10" aria-label="Carrinho" />
                </div>
            </div>
        </nav>
    );
}

export default Nav;
