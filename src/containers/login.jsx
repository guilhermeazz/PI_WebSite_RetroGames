import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../assets/logo.png';

import Campo from '../components/camposlc';
import Botaolc from '../components/botaolc';
import BotaoLink from '../components/botaoLink'

const handleSubmit = (event) => {
  event.preventDefault(); // Evita o reload da página
  alert('Login test');
};

const Login = () => {
  return (
    <>
      <div className="absolute inset-0 -z-1">
        <div className="bg-primary-1 w-full h-1/2"></div>
        <div className="bg-primary-5 w-full h-1/2"></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-4/6 w-1/2 rounded-2xl overflow-hidden">
          <div className="bg-primary-2 w-5/12 h-full text-white flex flex-col justify-center items-center gap-5">
            <h1 className="font-extrabold">Seja Bem vindo!</h1>
            <div className="font-semibold flex flex-col items-center gap-2">
              <p>Acesse agora mesmo</p>
              <p>a sua conta!</p>
              <p> e desfrute de todos as</p>
              <p>possibilidades com a</p>
              <p className="font-bold">RetroZone</p>
            </div>
          </div>

          <div className="bg-primary-4 w-7/12 h-full">
            <div className="flex justify-center p-6">
              <img
                src={logo}
                alt="logo da RetroZone, composto por letras coloridas e cartunizadas formando as palavras Retro e Zone"
                className="h-12"
              />
            </div>

            <div className="flex flex-col gap-5 p-6">
                <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-col gap-2">
                            <Campo 
                            texto="Email:" 
                            placeholder="exemplo@email.com" type="email" 
                            id="email" />
                            <Campo 
                            texto="Senha:" 
                            placeholder="*******" 
                            type="password" 
                            id="senha" />
                        </div>

                        <div className="flex justify-end">
                            <Link 
                            to="/recuperar-senha" className="text-black hover:underline hover:text-blue-500 font-light">
                            Esqueci minha senha
                            </Link>
                        </div> 
                    </div>

                    <Botaolc texto="Entrar" cor="green" />
                        
                </form>
                <div className='flex flex-col gap-1 items-center'>
                    <p className='font-light'>Ainda não possui cadastro?</p>
                    <BotaoLink 
                    link='/cadastro' 
                    cor='yellow' 
                    texto='cadastrar'/>
                </div>

            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

