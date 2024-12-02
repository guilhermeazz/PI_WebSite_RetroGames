import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/global/logo.png';
import Input from '../components/Inputslc';
import Botaolc from '../components/botaolc';
import BotaoLink from '../components/botaoLink';

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: '',
    senha: ''
  });
  const [rememberMe, setRememberMe] = useState(false); // Estado do checkbox
  const [isLoading, setIsLoading] = useState(false);
  const [registrationMessage, setRegistrationMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica se o token existe no localStorage ou sessionStorage
    const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
    if (token) {
      navigate('/home'); // Redireciona automaticamente para a home
    }

    // Verifica se a chave 'registrationSuccess' está presente no localStorage
    const registrationSuccess = localStorage.getItem('registrationSuccess');
    if (registrationSuccess) {
      setRegistrationMessage('Parabéns, você foi cadastrado com sucesso, agora faça seu login.');
      localStorage.removeItem('registrationSuccess'); // Remove após exibir a mensagem
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setInputValue(prevState => ({
      ...prevState,
      [id]: value
    }));

    if (registrationMessage) {
      setRegistrationMessage('');
    }
  };

  const handleRememberMeChange = () => {
    setRememberMe(prev => !prev); // Alterna o estado do checkbox
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!inputValue.email || !inputValue.senha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('http://localhost/retrozone/api/usuario/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: inputValue.email,
          senha: inputValue.senha
        })
      });

      setIsLoading(false);

      if (!response.ok) {
        const errorDetails = await response.json();
        alert(`Erro ao fazer login: ${errorDetails.message}`);
        return;
      }

      const data = await response.json();

      // Salva o token com base no estado do "Lembre-me"
      const storage = rememberMe ? localStorage : sessionStorage;
      storage.setItem('authToken', data.token);

      navigate('/home');

    } catch (error) {
      setIsLoading(false);
      alert('Erro ao fazer login');
    }
  };

  const isFormValid = inputValue.email && inputValue.senha;

  return (
    <>
      <div className="absolute inset-0 -z-1">
        <div className="bg-primary-1 w-full h-1/2"></div>
        <div className="bg-primary-5 w-full h-1/2"></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-4/6 w-1/2 rounded-2xl overflow-hidden">
          <div className="bg-primary-2 w-5/12 h-full text-white flex flex-col justify-center items-center gap-5">
            <h1 className="font-extrabold">Seja Bem Vindo!</h1>
            <div className="font-semibold flex flex-col items-center gap-2">
              <p>Acesse sua conta!</p>
              <p>e aproveite os recursos do sistema!</p>
            </div>
          </div>

          <div className="bg-primary-4 w-7/12 h-full">
            <div className="flex justify-center p-6">
              <img
                src={logo}
                alt="logo"
                className="h-12"
              />
            </div>

            {/* Exibe a mensagem de sucesso de cadastro, se necessário */}
            {registrationMessage && (
              <div className="text-green-500 text-sm mb-4 text-center">
                {registrationMessage}
              </div>
            )}

            <div className="flex flex-col gap-5 p-6">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <Input
                    texto="Email:"
                    placeholder="exemplo@email.com"
                    type="email"
                    id="email"
                    value={inputValue.email}
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
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={handleRememberMeChange}
                    />
                    <span>Lembre-me</span>
                  </div>

                  <div>
                    <Link
                      to="/recuperar-senha"
                      className="text-black hover:underline hover:text-blue-500 font-light">
                      Esqueci minha senha
                    </Link>
                  </div>
                </div>

                <Botaolc texto={isLoading ? 'Entrando...' : 'Entrar'} cor="green" disabled={isLoading || !isFormValid} />
              </form>

              <div className="flex flex-col text-center">
                <p className="font-light">Ainda não possui conta?</p>
                <BotaoLink link='/cadastro' texto="Cadastro" cor="yellow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
