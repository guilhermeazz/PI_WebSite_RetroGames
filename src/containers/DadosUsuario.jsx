import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DadosUsuario = () => {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // Estado para controlar a edição
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      navigate('/'); // Se não houver usuário logado, redireciona para a página inicial
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost/retrozone/api/usuario/read_single.php?id=${userId}`);
        
        if (!response.ok) {
          throw new Error('Erro ao carregar os dados do usuário');
        }

        const data = await response.json();

        if (data.message) {
          setError(data.message);
        } else {
          setUsuario(data);
          setFormData(data); // Inicializa os dados do formulário
        }
      } catch (error) {
        setError('Erro ao buscar dados do usuário.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleDelete = async () => {
    const userId = localStorage.getItem('userId');
    if (!userId) return;

    const response = await fetch('http://localhost/retrozone/api/usuario/delete.php', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id_usuario: userId })
    });

    const data = await response.json();

    if (response.ok) {
      handleLogout();
    } else {
      setError(data.message || 'Erro ao excluir usuário.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    sessionStorage.removeItem('authToken');
    localStorage.removeItem('userId');
    sessionStorage.removeItem('userId');
    navigate('/');
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSaveChanges = async () => {
    const response = await fetch('http://localhost/retrozone/api/usuario/update.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      setUsuario(formData); // Atualiza os dados do usuário
      setIsEditing(false); // Sai do modo de edição
    } else {
      setError(data.message || 'Erro ao atualizar usuário.');
    }
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="dados-usuario-container">
      <h1>Dados do Usuário</h1>
      {usuario && (
        <div className="usuario-info">
          {isEditing ? (
            <div>
              <h2>Editar Dados</h2>
              <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label>Nome Completo</label>
                  <input
                    type="text"
                    name="nome_completo"
                    value={formData.nome_completo || ''}
                    onChange={handleEditChange}
                    className="p-2 border rounded"
                  />
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email || ''}
                    onChange={handleEditChange}
                    className="p-2 border rounded"
                  />
                  <label>Telefone</label>
                  <input
                    type="text"
                    name="telefone"
                    value={formData.telefone || ''}
                    onChange={handleEditChange}
                    className="p-2 border rounded"
                  />
                  <label>CEP</label>
                  <input
                    type="text"
                    name="cep"
                    value={formData.cep || ''}
                    onChange={handleEditChange}
                    className="p-2 border rounded"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Rua</label>
                  <input
                    type="text"
                    name="rua"
                    value={formData.rua || ''}
                    onChange={handleEditChange}
                    className="p-2 border rounded"
                  />
                  <label>Número</label>
                  <input
                    type="text"
                    name="numero"
                    value={formData.numero || ''}
                    onChange={handleEditChange}
                    className="p-2 border rounded"
                  />
                  <label>Cidade</label>
                  <input
                    type="text"
                    name="cidade"
                    value={formData.cidade || ''}
                    onChange={handleEditChange}
                    className="p-2 border rounded"
                  />
                  <label>Estado</label>
                  <input
                    type="text"
                    name="estado"
                    value={formData.estado || ''}
                    onChange={handleEditChange}
                    className="p-2 border rounded"
                  />
                </div>
              </form>
              <div className="flex justify-center mt-6">
                <button
                  type="button"
                  onClick={handleSaveChanges}
                  className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
                >
                  Salvar Alterações
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p><strong>ID:</strong> {usuario.id_usuario}</p>
              <p><strong>Nome Completo:</strong> {usuario.nome_completo}</p>
              <p><strong>Email:</strong> {usuario.email}</p>
              <p><strong>Telefone:</strong> {usuario.telefone}</p>
              <p><strong>CEP:</strong> {usuario.cep}</p>
              <p><strong>Rua:</strong> {usuario.rua}</p>
              <p><strong>Número:</strong> {usuario.numero}</p>
              <p><strong>Cidade:</strong> {usuario.cidade}</p>
              <p><strong>Estado:</strong> {usuario.estado}</p>
              <p><strong>Data de Criação:</strong> {usuario.data_criacao}</p>
            </div>
          )}
        </div>
      )}

      <div className="flex justify-center mt-6">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          {isEditing ? 'Cancelar' : 'Alterar Dados'}
        </button>
      </div>

      {/* Botão de exclusão */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
        >
          Excluir Conta
        </button>
      </div>
    </div>
  );
};

export default DadosUsuario;
