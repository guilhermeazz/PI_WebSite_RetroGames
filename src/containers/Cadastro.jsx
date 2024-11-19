import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

import Input from '../components/Inputslc';
import Botaolc from '../components/Botaolc';
import BotaoLink from '../components/BotaoLink';

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: '',
    senha: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setInputValue(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleButtonClick = () => {
    alert(`Você digitou: ${inputValue.email} e ${inputValue.senha}`);
    // Lógica da ação do botão.  
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita o reload da página  
    alert('Login test');
  };

  return (
    <>
      <div className="absolute inset-0 -z-1">
        <div className="bg-primary-1 w-full h-1/2"></div>
        <div className="bg-primary-5 w-full h-1/2"></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-4/6 w-2/5">


          <div className="bg-primary-4 w-full h-full rounded-2xl">
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
                    <div>
                      <Input
                        texto="Nome completo:"
                        placeholder="Insira seu nome completo"
                        type="name"
                        id="nome"
                        value={inputValue.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <Input
                        texto="Email:"
                        placeholder="exemplo@email.com"
                        type="email"
                        id="email"
                        value={inputValue.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <Input
                        texto="Senha:"
                        placeholder="*******"
                        type="password"
                        id="senha"
                        value={inputValue.senha}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <Input
                        texto="Confirmar senha:"
                        placeholder="*******"
                        type="password"
                        id="confirmar-senha"
                        value={inputValue.senha}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                </div>
                <Botaolc texto="Cadastrar" cor="green" onClick={handleButtonClick} />
              </form>
              <div className='flex flex-col text-center'>
                <p className='font-light'>Já possuo cadastro!</p>
                <BotaoLink
                  link='/'
                  cor='yellow'
                  texto='Login' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;