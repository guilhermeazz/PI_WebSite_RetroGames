import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditarUsuario = () => {
  const { id } = useParams();
  const [usuario, setUsuario] = useState({
    nome_completo: '',
    email: '',
    telefone: '',
    cep: '',
    rua: '',
    numero: '',
    cidade: '',
    estado: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost/retrozone/api/usuario/read_single.php?id=${id}`)
      .then((response) => response.json())
      .then((data) => setUsuario(data))
      .catch((error) =>
        console.error('Erro ao buscar detalhes do usuário:', error)
      );
  }, [id]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUsuario((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'http://localhost/retrozone/api/usuario/update.php',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...usuario, id_usuario: id }),
        }
      );

      const data = await response.json();
      alert(data.message);
      navigate('/gestao-usuarios');
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      alert('Erro ao atualizar usuário');
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <h1 className="text-3xl font-semibold text-blue-800 mb-4">Editar Usuário</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-blue-50 shadow-lg p-8 rounded-lg space-y-6 max-w-xl mx-auto"
      >
        <label className="flex flex-col">
          <span className="font-medium text-blue-800">Nome Completo:</span>
          <input
            type="text"
            id="nome_completo"
            value={usuario.nome_completo}
            onChange={handleInputChange}
            required
            className="p-3 mt-2 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="flex flex-col">
          <span className="font-medium text-blue-800">Email:</span>
          <input
            type="email"
            id="email"
            value={usuario.email}
            onChange={handleInputChange}
            required
            className="p-3 mt-2 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="flex flex-col">
          <span className="font-medium text-blue-800">Telefone:</span>
          <input
            type="text"
            id="telefone"
            value={usuario.telefone}
            onChange={handleInputChange}
            required
            className="p-3 mt-2 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="flex flex-col">
          <span className="font-medium text-blue-800">CEP:</span>
          <input
            type="text"
            id="cep"
            value={usuario.cep}
            onChange={handleInputChange}
            className="p-3 mt-2 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="flex flex-col">
          <span className="font-medium text-blue-800">Rua:</span>
          <input
            type="text"
            id="rua"
            value={usuario.rua}
            onChange={handleInputChange}
            className="p-3 mt-2 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="flex flex-col">
          <span className="font-medium text-blue-800">Número:</span>
          <input
            type="text"
            id="numero"
            value={usuario.numero}
            onChange={handleInputChange}
            className="p-3 mt-2 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="flex flex-col">
          <span className="font-medium text-blue-800">Cidade:</span>
          <input
            type="text"
            id="cidade"
            value={usuario.cidade}
            onChange={handleInputChange}
            className="p-3 mt-2 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="flex flex-col">
          <span className="font-medium text-blue-800">Estado:</span>
          <input
            type="text"
            id="estado"
            value={usuario.estado}
            onChange={handleInputChange}
            className="p-3 mt-2 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-400 text-white p-3 rounded hover:bg-blue-500 transition focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Salvar
        </button>
      </form>
    </div>
  );
};

export default EditarUsuario;
