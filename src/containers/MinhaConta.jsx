import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/navbar';
import Footer from '../containers/Footer';
import { FaEdit } from 'react-icons/fa'; // Certifique-se de que este pacote está instalado

const DadosUsuario = () => {
  const [usuario, setUsuario] = useState({
    nome_completo: '',
    email: '',
    telefone: '',
    cep: '',
    rua: '',
    numero: '',
    cidade: '',
    estado: ''
  });
  const [isEditing, setIsEditing] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userJSON = localStorage.getItem('user') || sessionStorage.getItem('user');
    console.log("userJSON:", userJSON); // Verificação no console
    if (userJSON && userJSON !== "undefined") {
      try {
        const user = JSON.parse(userJSON);
        console.log("user:", user); // Verificação no console

          const apiUrl = `http://localhost/retrozone/api/usuario/read_single.php?id=${user}`;
          console.log("API URL:", apiUrl); // Verificação no console
          fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
              console.log("API Response:", data); // Verificação no console
              setUsuario(data);
            })
            .catch(error => console.error('Erro ao buscar detalhes do usuário:', error));

      } catch (error) {
        console.error('Erro ao fazer parsing dos dados do usuário:', error);
      }
    } else {
      console.error('Dados do usuário não encontrados');
    }
  }, []);
  
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUsuario(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSave = async (e, field) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost/retrozone/api/usuario/update.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...usuario, id_usuario: usuario.id_usuario }) // Usando o ID correto do usuário
      });

      const data = await response.json();
      alert(data.message);
      setIsEditing(null);

    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
      alert("Erro ao atualizar usuário");
    }
  };

  const handleDeleteAccount = async () => {
    if (window.confirm('Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.')) {
      try {
        const response = await fetch('http://localhost/retrozone/api/usuario/delete.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id_usuario: usuario.id_usuario }) // Usando o ID correto do usuário
        });

        const data = await response.json();
        alert(data.message);
        navigate('/dados-usuario');  // Redirecionar após excluir a conta

      } catch (error) {
        console.error("Erro ao excluir conta:", error);
        alert("Erro ao excluir conta");
      }
    }
  };

  const handleLogout = () => {
    // Remover token e informações do usuário do localStorage e sessionStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('user');
    
    alert("Usuário desconectado");
    navigate('/');  // Redirecionar para a página de login
  };

  const handleChangePassword = () => {
    navigate('/alterar-senha');
  };

  const handleViewOrders = () => {
    navigate('/meus-pedidos');
  };

  const fieldsToShow = ["nome_completo", "email", "telefone", "cep", "rua", "numero", "cidade", "estado"];

  return (
    <>
    <Nav />
    <div className="flex flex-col min-h-screen bg-white text-black items-center justify-center">
      <div className="flex-grow container mx-auto px-4 py-10 flex flex-col items-center">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-lg">
          <h1 className="text-3xl font-bold mb-6 text-center">Dados do Usuário</h1>
          <div className="space-y-4">
            {fieldsToShow.map((field) => (
              <div key={field} className="flex items-center justify-between">
                <span className="font-semibold">{field.replace('_', ' ')}:</span>
                {isEditing === field ? (
                  <input
                    type="text"
                    id={field}
                    value={usuario[field]}
                    className="ml-2 p-2 border border-gray-300 rounded w-full"
                    onBlur={(e) => handleSave(e, field)}
                  />
                ) : (
                  <span className="ml-2">{usuario[field]}</span>
                )}
                <FaEdit className="ml-4 cursor-pointer text-blue-500" onClick={() => setIsEditing(field)} />
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col space-y-4">
            <button
              className="bg-red-600 text-white p-3 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              onClick={handleDeleteAccount}
            >
              Excluir Minha Conta
            </button>
            <button
              className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={handleLogout}
            >
              Logout
            </button>
            <button
              className="bg-green-600 text-white p-3 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              onClick={handleChangePassword}
            >
              Alterar Senha
            </button>
            <button
              className="bg-orange-600 text-white p-3 rounded hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
              onClick={handleViewOrders}
            >
              Ver Meus Pedidos
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default DadosUsuario;
