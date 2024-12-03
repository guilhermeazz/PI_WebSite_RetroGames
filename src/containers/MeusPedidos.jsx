import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/navbar';
import Footer from '../containers/Footer';

const AlterarSenha = () => {
  const [senhaAntiga, setSenhaAntiga] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarNovaSenha, setConfirmarNovaSenha] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const userJSON = localStorage.getItem('user') || sessionStorage.getItem('user');
    console.log("userJSON:", userJSON); // Verificação no console
    if (userJSON && userJSON !== "undefined") {
      try {
        const user = JSON.parse(userJSON);
        console.log("user:", user); // Verificação no console
        if (user && user.id_usuario) {
          // Aqui você pode usar user.id_usuario se precisar
        } else {
          console.error('ID do usuário não encontrado');
        }
      } catch (error) {
        console.error('Erro ao fazer parsing dos dados do usuário:', error);
      }
    } else {
      console.error('Dados do usuário não encontrados');
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (novaSenha !== confirmarNovaSenha) {
      alert('As novas senhas não coincidem.');
      return;
    }

    const userJSON = localStorage.getItem('user') || sessionStorage.getItem('user');
    if (userJSON && userJSON !== "undefined") {
      try {
        const user = JSON.parse(userJSON);

        const response = await fetch('http://localhost/retrozone/api/usuario/update_password.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id_usuario: user.id_usuario,
            senhaAntiga,
            novaSenha
          })
        });

        const data = await response.json();

        if (!response.ok) {
          alert(`Erro ao alterar senha: ${data.message}`);
          return;
        }

        alert('Senha alterada com sucesso!');
        navigate('/minha-conta');

      } catch (error) {
        console.error("Erro ao alterar senha:", error);
        alert("Erro ao alterar senha");
      }
    } else {
      alert("Dados do usuário não encontrados");
    }
  };

  const handleCancel = () => {
    navigate('/minha-conta');
  };

  return (
    <>
      <Nav />
      <div className="flex flex-col min-h-screen bg-white text-black items-center justify-center">
        <div className="flex-grow container mx-auto px-4 py-10 flex flex-col items-center">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h1 className="text-3xl font-bold mb-6 text-center">Alterar Senha</h1>
            <form onSubmit={handleSubmit} className="space-y-4 w-full">
              <div className="flex flex-col">
                <label className="font-semibold">Senha Antiga:</label>
                <input
                  type="password"
                  value={senhaAntiga}
                  onChange={(e) => setSenhaAntiga(e.target.value)}
                  className="p-2 border border-gray-300 rounded w-full"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold">Nova Senha:</label>
                <input
                  type="password"
                  value={novaSenha}
                  onChange={(e) => setNovaSenha(e.target.value)}
                  className="p-2 border border-gray-300 rounded w-full"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold">Confirmar Nova Senha:</label>
                <input
                  type="password"
                  value={confirmarNovaSenha}
                  onChange={(e) => setConfirmarNovaSenha(e.target.value)}
                  className="p-2 border border-gray-300 rounded w-full"
                  required
                />
              </div>
              <div className="mt-8 flex flex-col space-y-4">
                <button
                  type="submit"
                  className="bg-green-600 text-white p-3 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                >
                  Salvar
                </button>
                <button
                  type="button"
                  className="bg-gray-600 text-white p-3 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                  onClick={handleCancel}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AlterarSenha;
