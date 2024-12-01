import React, { useEffect, useState } from 'react';

const DadosUsuarios = () => {
  const [usuario, setUsuario] = useState(null); // Para armazenar os dados do usuário

  useEffect(() => {
    // Função para buscar os dados do usuário
    const fetchUsuario = async () => {
      try {
        const response = await fetch('http://localhost/retrozone/api/usuario/read.php'); // URL do backend para buscar os dados
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados do usuário');
        }
        const data = await response.json();
        setUsuario(data); // Armazena os dados no estado
      } catch (error) {
        console.error('Erro:', error);
      }
    };

    fetchUsuario(); // Chama a função ao montar o componente
  }, []);

  // Função para excluir o usuário
  const handleDelete = async () => {
    try {
      const response = await fetch('http://localhost/retrozone/api/delete_usuario.php', { // URL do backend para deletar o usuário
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_usuario: usuario.id_usuario }), // Envia o ID do usuário a ser excluído
      });

      if (!response.ok) {
        throw new Error('Erro ao excluir o usuário');
      }

      alert('Usuário excluído com sucesso!');
      window.location.href = '/login'; // Redireciona para a página de login após exclusão
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  if (!usuario) {
    return <p>Carregando...</p>; // Exibe uma mensagem de carregamento enquanto os dados são recuperados
  }

  return (
    <div className="flex justify-center mt-8">
      <div className="w-full max-w-2xl p-4">
        <div className="text-center mb-4">
          <h1 className="font-bold text-xl">Meus Dados</h1>
        </div>

        {/* Exibe as informações do usuário */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span className="font-semibold">Nome</span>
              <span>{usuario.nome_completo}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">CPF</span>
              <span>{usuario.cpf}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">E-mail</span>
              <span>{usuario.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Telefone</span>
              <span>{usuario.telefone || 'Não informado'}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">CEP</span>
              <span>{usuario.cep || 'Não informado'}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Rua</span>
              <span>{usuario.rua || 'Não informado'}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Número</span>
              <span>{usuario.numero || 'Não informado'}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Cidade</span>
              <span>{usuario.cidade || 'Não informado'}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Estado</span>
              <span>{usuario.estado || 'Não informado'}</span>
            </div>
          </div>

          {/* Botão para excluir o usuário */}
          <div className="text-center mt-4">
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Excluir Conta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DadosUsuarios;
