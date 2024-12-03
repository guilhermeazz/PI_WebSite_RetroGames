import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate
import logo from '../assets/global/logo.png';

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

  const [error, setError] = useState(''); // Estado para exibir mensagens de erro
  const navigate = useNavigate(); // Inicializando a função de navegação

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setInputValue(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  useEffect(() => {
    const telefoneElement = document.getElementById("telefone");
    
    const handleTelefoneInput = (e) => {
      let telefone = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
      if (telefone.length > 11) { // Limita a 11 dígitos
          telefone = telefone.substring(0, 11);
      }
      e.target.value = telefone;
      setInputValue(prevState => ({
        ...prevState,
        telefone: telefone
      }));
    };

    telefoneElement.addEventListener("input", handleTelefoneInput);

    return () => {
      telefoneElement.removeEventListener("input", handleTelefoneInput);
    };
  }, []);

  const validateEmail = (email) => {
    // Expressão regular para validar o formato de email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (senha) => {
    // Verificar se a senha tem pelo menos 8 caracteres
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(senha);
  };

  const validatePhone = (telefone) => {
    // Verificar se o telefone tem exatamente 11 dígitos
    return /^\d{11}$/.test(telefone);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita o reload da página  
  
    if (inputValue.senha !== inputValue.confirmar_senha) {
      setError('As senhas não conferem');
      return;
    }

    if (!validatePassword(inputValue.senha)) {
      setError('A senha deve ter pelo menos 8 caracteres, com letras maiúsculas, minúsculas e números.');
      return;
    }

    // Validação do telefone
    if (!validatePhone(inputValue.telefone)) {
      setError('Por favor, insira um número de telefone válido com exatamente 11 dígitos.');
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
          telefone: inputValue.telefone || null,
        })
      });

      if (!response.ok) {
        const errorDetails = await response.json();
        console.error("Erro:", errorDetails);
        alert(`Erro ao cadastrar usuário: ${errorDetails.message}`);
        return;
      }

      localStorage.setItem('registro', JSON.stringify(inputValue)); // Salvando o registro no localStorage
  
      const data = await response.json();
      navigate('/'); // Redirecionar para a página de login após o cadastro bem-sucedido
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
            alt="logo da RetroZone"
            className="h-12 mb-6"
          />

          {/* Exibindo mensagem de erro, se houver */}
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6" id="formularioCadastro">
            <div className="flex flex-col gap-1">
              <Input
                texto="Nome completo:"
                placeholder="Insira seu nome completo"
                type="text"
                id="nome_completo"
                value={inputValue.nome_completo}
                onChange={handleInputChange}
              />
              <Input
                texto="Email:"
                placeholder="exemplo@email.com"
                type="email"
                id="email"
                value={inputValue.email}
                onChange={handleInputChange}
              />
              <Input
                texto="Telefone:"
                placeholder="(xx) xxxxx-xxxx"
                type="tel"
                id="telefone"
                value={inputValue.telefone}
                onChange={handleInputChange}
              />
              <Input
                texto="Senha:"
                placeholder="*******"
                type="password"
                id="senha"
                value={inputValue.senha}
                onChange={handleInputChange}
              />
              <Input
                texto="Confirmar senha:"
                placeholder="*******"
                type="password"
                id="confirmar_senha"
                value={inputValue.confirmar_senha}
                onChange={handleInputChange}
              />
            </div>
            <Botaolc texto="Cadastrar" cor="green" />
          </form>

          <div className='flex flex-col w-full text-center mt-6'>
            <p className='font-light'>Já possuo cadastro!</p>
            <BotaoLink
              link='/'
              cor='yellow'
              texto='Login'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cadastrar;
