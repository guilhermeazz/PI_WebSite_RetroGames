import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom'; // Importa useNavigate para redirecionamento

import logo from '../assets/global/logo.png';
import SetaEsquerda from '../assets/global/img-seta-esquerda.png';

const MinhaConta = () => {
    const navigate = useNavigate(); // Hook para redirecionar

    const handleLogout = () => {
        // Remove o token do armazenamento
        localStorage.removeItem('authToken');
        sessionStorage.removeItem('authToken');

        // Redireciona para a página de login
        navigate('/');
    };

    return (
        <>
            <div className='flex h-screen'>
                <div className='w-full'>
                    <div className='flex items-center justify-between h-24 px-20 bg-white shadow'>
                        <div className='flex-shrink-0'>
                            <Link to='/home'>
                                <img src={SetaEsquerda} alt="Seta" className='h-10 w-10' />
                            </Link>
                        </div>

                        <div className='flex-1 flex justify-center'>
                            <Link to='/home'>
                                <img src={logo} alt="Logo" className='h-12' />
                            </Link>
                        </div>
                    </div>

                    <div className='flex justify-between items-center h-96 px-36'>
                        <div className='flex'>
                            <table className="w-full text-center border border-black text-left">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="py-2 px-4">Menu</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-2 px-4">
                                            <Link to="dados-usuario" className="hover:text-blue-500 font-bold">Meus Dados</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4">
                                            <Link to="Carrinho" className="hover:text-blue-500 font-bold">Carrinho</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4">
                                            <Link to="favoritos" className="hover:text-blue-500 font-bold">Favoritos</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4">
                                            {/* Botão de logout com a função handleLogout */}
                                            <button
                                                onClick={handleLogout}
                                                className="hover:text-red-500 font-bold">
                                                Logout
                                            </button>
                                        </td>
                                    </tr>
                                    {/* Adicione mais links aqui, se necessário */}
                                </tbody>
                            </table>
                        </div>

                        <div className='flex-1 flex flex-col items-center h-36'>
                            <div>
                                <Outlet /> {/* Aqui é onde a rota filha será renderizada */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MinhaConta;
