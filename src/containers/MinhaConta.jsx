import React from 'react';
import { Link, Outlet } from 'react-router-dom'; // Não esqueça de importar o Outlet  

import logo from '../assets/global/img-logo.png';
import SetaEsquerda from '../assets/global/img-seta-esquerda.png';

const MinhaConta = () => {
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
                                            <Link to="alterar-senha" className="hover:text-blue-500 font-bold">Alterar Senha</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4">
                                            <Link to="favoritos" className="hover:text-blue-500 font-bold">Favoritos</Link>
                                        </td>
                                    </tr>
                                    {/* Você pode adicionar mais links aqui */}
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