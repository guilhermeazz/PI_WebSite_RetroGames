import React, { useState, useEffect } from 'react';

const GestaoUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('http://localhost/retrozone/api/usuario/read.php')
      .then(response => response.json())
      .then(data => setUsuarios(data.records))
      .catch(error => console.error('Erro ao buscar usuários:', error));
  }, []);

  return (
    <div className="min-h-screen bg-primary-1 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Gestão de Usuários</h1>
      <div className="bg-primary-3 p-4 rounded-lg">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="p-2">ID</th>
              <th className="p-2">Nome</th>
              <th className="p-2">Email</th>
              <th className="p-2">Telefone</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map(usuario => (
              <tr key={usuario.id_usuario}>
                <td className="p-2">{usuario.id_usuario}</td>
                <td className="p-2">{usuario.nome_completo}</td>
                <td className="p-2">{usuario.email}</td>
                <td className="p-2">{usuario.telefone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GestaoUsuarios;
