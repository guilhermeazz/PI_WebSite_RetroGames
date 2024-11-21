import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/global/img-logo.png';
import MinhaConta from '../assets/header/icon-minha-conta.png';
import Carrinho from '../assets/header/icon-carrinho-de-compras.png';
import Lupa from '../assets/header/icon-lupa.png';
import Duvida from '../assets/header/icon-duvida.png';

import BarraDireita from '../assets/fliperama/img-barra-direita.png';
import BarraEsqueda from '../assets/fliperama/img-barra-esquerda.png';
import JoystickFliperama from '../assets/fliperama/img-joystick-fliperama.png';
import BotaoFliperama from '../assets/fliperama/img-botao-fliperama.png';

import Promocao from '../assets/promocao/img-promocao.jpg'

import Input from '../components/Inputslc';
import Botaolc from '../components/botaolc';
import BotaoLink from '../components/botaoLink';

const Home = () => {
    return (
        <>
            <div className='bg-gray-900 h-screen'>
                <div className='w-full'>
                    {/* Header */}
                    <div className='bg-red-900'>
                        <div className='flex justify-center gap-8 pt-4 pb-6'>
                            <div className='bg-red-600 pl-16 pr-20 py-1  border-black border-2 rounded-2xl'>
                                <div className='bg-orange-600 px-10 py-1 border-black border-2 rounded-2xl'>
                                    <div className='bg-white p-1 border-black border-2 rounded-2xl'>
                                        <img src={logo} className='h-12' />
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center px-12 border-black border-2 rounded-2xl gap-24 bg-red-600'>
                                <div className='flex items-center'>
                                    <div>
                                        <input
                                            type="text"
                                            className='w-80 pl-4 py-1 rounded-3xl' />
                                    </div>

                                    <div>
                                        <button type='submit'>
                                            <img src={Lupa} className='h-10' />
                                        </button>
                                    </div>
                                </div>

                                <div className='flex gap-6'>
                                    <div className='bg-orange-600 p-2 rounded-2xl'>
                                        <Link to="#">
                                            <img src={Duvida} className='h-10' />
                                        </Link>
                                    </div>

                                    <div className='bg-orange-600 p-2 rounded-2xl'>
                                        <Link to="#">
                                            <img src={MinhaConta} className='h-10' />
                                        </Link>
                                    </div>

                                    <div className='bg-orange-600 p-2 rounded-2xl'>
                                        <Link to="#">
                                            <img src={Carrinho} className='h-10' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center bg-gray-900 text-white py-2'>
                            <nav>
                                <ul className='flex gap-8'>
                                    <li className='cursor-pointer'>Exemplo</li>
                                    <li className='cursor-pointer'>Exemplo</li>
                                    <li className='cursor-pointer'>Exemplo</li>
                                    <li className='cursor-pointer'>Exemplo</li>
                                    <li className='cursor-pointer'>Exemplo</li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    {/* Container de promoção */}
                    <div className='flex flex-col'>
                        <div className='bg-orange-600 py-6'></div>

                        <div className='flex gap-2 justify-center'>
                            <div>
                                <img src={BarraEsqueda} />
                            </div>

                            <div className='flex flex-col items-center mt-4'>

                                <div className=''>
                                    <div>
                                        <img src={Promocao} className='rounded-2xl' />
                                    </div>
                                </div>

                                <div className='flex items-center gap-36'>

                                    <div className='mb-4'>
                                        <img src={JoystickFliperama} />
                                    </div>

                                    <div className='flex gap-20'>
                                        <div>
                                            <img src={BotaoFliperama} />
                                        </div>

                                        <div>
                                            <img src={BotaoFliperama} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <img src={BarraDireita} />
                            </div>
                        </div>

                        <div className='bg-orange-600 py-6'></div>
                    </div>

                    {/* Main */}
                    <div className='h-screen bg-white mt-8'>
                        <div className='bg-gray-900'>
                            <div className='flex justify-end py-4 px-36 gap-2'>
                                <div className='text-white'>
                                    <span>Ordenar por:</span>
                                </div>

                                <div>
                                    <select name="" id="" className='rounded-2xl px-4'>
                                        <option value="">Mais recentes</option>
                                        <option value="">Menor preço</option>
                                        <option value="">Maior preço</option>
                                        <option value="">Mais vendidos</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div>
                        <div className='bg-red-900 h-4'></div>

                        <footer>
                            <div className='flex bg-gray-900 text-white py-12 justify-around'>
                                <div className='flex flex-col gap-2'>
                                    <div>
                                        <h1>Contato</h1>
                                    </div>

                                    <div>
                                        <ul>
                                            <li>Email: Alanfelix@gmail.com</li>
                                            <li>Endereço: Av de Marcondes N:1200 </li>
                                            <li>Telefone: (81) 99662-3496 </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;