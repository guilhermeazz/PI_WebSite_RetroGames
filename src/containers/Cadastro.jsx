import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/global/img-logo.png';

import Input from '../components/Inputslc';
import Botaolc from '../components/botaolc';
import BotaoLink from '../components/botaoLink';

const Cadastrar = () => {
  const [inputValue, setInputValue] = useState({
    nome_completo: '',
    email: '',
    senha: '',
    confirmar_senha: '',
    telefone: '' 
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setInputValue(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita o reload da página  
  
    if (inputValue.senha !== inputValue.confirmar_senha) {
      alert("As senhas não conferem");
      return;
    }
  
    try {
      const response = await fetch('http://localhost/retrozone/api/usuario/create.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome_completo: inputValue.nome_completo,
          email: inputValue.email,
          senha: inputValue.senha,
          telefone: inputValue.telefone // Inclui telefone na requisição
        })
      });
  
      if (!response.ok) {
        const errorDetails = await response.json();
        console.error("Erro:", errorDetails);
        alert(`Erro ao cadastrar usuário: ${errorDetails.message}`);
        return;
      }
  
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao cadastrar usuário");
    }
  };
  

  return (
    <>
      <div className="absolute inset-0 -z-1">
        <div className="bg-primary-1 w-full h-1/2"></div>
        <div className="bg-primary-5 w-full h-1/2"></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white w-2/5 h-auto p-6 rounded-2xl flex flex-col items-center"> 
          <img
            src={logo}
            alt="logo da RetroZone, composto por letras coloridas e cartunizadas formando as palavras Retro e Zone"
            className="h-12 mb-6"
          />

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <div className="flex flex-col gap-2">
                <div>
                  <Input
                    texto="Nome completo:"
                    placeholder="Insira seu nome completo"
                    type="text"
                    id="nome_completo"
                    value={inputValue.nome_completo}
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
                    texto="Telefone:"
                    placeholder="(xx) xxxxx-xxxx"
                    type="tel"
                    id="telefone"
                    value={inputValue.telefone}
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
                    id="confirmar_senha"
                    value={inputValue.confirmar_senha}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <Botaolc texto="Cadastrar" cor="green" />
          </form>
          <div className='flex flex-col w-full text-center mt-6'>
            <p className='font-light'>Já possuo cadastro!</p>
            <BotaoLink
              link='/'
              cor='yellow'
              texto='Login' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cadastrar;
