import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GestaoUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost/retrozone/api/usuario/read.php')
      .then(response => response.json())
      .then(data => setUsuarios(data.records))
      .catch(error => console.error('Erro ao buscar usuários:', error));
  }, []);

  const deletarUsuario = (id) => {
    if (window.confirm('Tem certeza que deseja deletar este usuário?')) {
      fetch(`http://localhost/retrozone/api/usuario/delete.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_usuario: id }),
      })
        .then(response => response.json())
        .then(() => {
          setUsuarios(usuarios.filter(usuario => usuario.id_usuario !== id));
          alert('Usuário deletado com sucesso!');
        })
        .catch(error => console.error('Erro ao deletar usuário:', error));
    }
  };

  const editarUsuario = (id) => {
    navigate(`/editar-usuario/${id}`);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-blue-900">Gestão de Usuários</h1>
        <p className="text-gray-600">Gerencie, edite e exclua os usuários do sistema.</p>
      </header>

      {/* Tabela de Usuários */}
      <div className="overflow-x-auto bg-blue-50 p-6 rounded-lg shadow-md">
        <table className="w-full table-auto border-collapse border border-blue-200">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="p-3 border border-blue-200">ID</th>
              <th className="p-3 border border-blue-200">Nome</th>
              <th className="p-3 border border-blue-200">Email</th>
              <th className="p-3 border border-blue-200">Telefone</th>
              <th className="p-3 border border-blue-200">Ações</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.length > 0 ? (
              usuarios.map((usuario) => (
                <tr key={usuario.id_usuario} className="hover:bg-blue-100">
                  <td className="p-3 border border-blue-200">{usuario.id_usuario}</td>
                  <td className="p-3 border border-blue-200">{usuario.nome_completo}</td>
                  <td className="p-3 border border-blue-200">{usuario.email}</td>
                  <td className="p-3 border border-blue-200">{usuario.telefone}</td>
                  <td className="p-3 border border-blue-200 flex gap-2 justify-center">
                    <button
                      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-red-500"
                      onClick={() => deletarUsuario(usuario.id_usuario)}
                    >
                      Deletar
                    </button>
                    <button
                      className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition focus:outline-none focus:ring-2 focus:ring-blue-300"
                      onClick={() => editarUsuario(usuario.id_usuario)}
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-6 text-gray-500">
                  Nenhum usuário encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GestaoUsuarios;
