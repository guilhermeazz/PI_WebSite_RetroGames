import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GestaoProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost/retrozone/api/produto/read.php')
      .then((response) => response.json())
      .then((data) => setProdutos(data.records))
      .catch((error) => console.error('Erro ao buscar produtos:', error));
  }, []);

  const deletarProduto = (id) => {
    if (window.confirm('Tem certeza que deseja deletar este produto?')) {
      fetch(`http://localhost/retrozone/api/produto/delete.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_produto: id }),
      })
        .then((response) => response.json())
        .then(() => {
          setProdutos(produtos.filter((produto) => produto.id_produto !== id));
          alert('Produto deletado com sucesso!');
        })
        .catch((error) => console.error('Erro ao deletar produto:', error));
    }
  };

  const editarProduto = (id) => {
    navigate(`/editar-produto/${id}`);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="p-6 border-b border-gray-200">
        <h1 className="text-3xl font-bold text-blue-900">Gestão de Produtos</h1>
        <p className="text-gray-600">Gerencie, edite e exclua os produtos do sistema.</p>
      </header>

      {/* Conteúdo */}
      <main className="p-6">
        <div className="overflow-x-auto bg-blue-50 p-6 rounded-lg shadow-md">
          <table className="w-full text-left border-collapse border border-blue-200">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="p-3 border border-blue-200">ID</th>
                <th className="p-3 border border-blue-200">Nome</th>
                <th className="p-3 border border-blue-200">Descrição</th>
                <th className="p-3 border border-blue-200">Valor</th>
                <th className="p-3 border border-blue-200">Estoque</th>
                <th className="p-3 border border-blue-200">Categoria</th>
                <th className="p-3 border border-blue-200 text-center">Ações</th>
              </tr>
            </thead>
            <tbody>
              {produtos.length > 0 ? (
                produtos.map((produto, index) => (
                  <tr key={index} className="border-b hover:bg-blue-100 transition">
                    <td className="p-3 border border-blue-200">{produto.id_produto}</td>
                    <td className="p-3 border border-blue-200">{produto.nome}</td>
                    <td className="p-3 border border-blue-200">{produto.descricao}</td>
                    <td className="p-3 border border-blue-200">R$ {produto.valor}</td>
                    <td className="p-3 border border-blue-200">{produto.qtd_estoque}</td>
                    <td className="p-3 border border-blue-200">{produto.categoria}</td>
                    <td className="p-3 flex justify-center gap-2">
                      <button
                        className="bg-red-600 text-white py-1 px-4 rounded hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-red-500"
                        onClick={() => deletarProduto(produto.id_produto)}
                      >
                        Deletar
                      </button>
                      <button
                        className="bg-blue-400 text-white py-1 px-4 rounded hover:bg-blue-500 transition focus:outline-none focus:ring-2 focus:ring-blue-300"
                        onClick={() => editarProduto(produto.id_produto)}
                      >
                        Editar
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center p-6 text-gray-500">
                    Nenhum produto encontrado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default GestaoProdutos;
