import React, { useState, useEffect } from 'react';

const GestaoProdutos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch('http://localhost/retrozone/api/produto/read.php')
      .then(response => response.json())
      .then(data => setProdutos(data.records))
      .catch(error => console.error('Erro ao buscar produtos:', error));
  }, []);

  return (
    <div className="min-h-screen bg-primary-1 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Gestão de Produtos</h1>
      <div className="bg-primary-3 p-4 rounded-lg">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="p-2">ID</th>
              <th className="p-2">Nome</th>
              <th className="p-2">Descrição</th>
              <th className="p-2">Valor</th>
              <th className="p-2">Estoque</th>
              <th className="p-2">Categoria</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map(produto => (
              <tr key={produto.id_produto}>
                <td className="p-2">{produto.id_produto}</td>
                <td className="p-2">{produto.nome}</td>
                <td className="p-2">{produto.descricao}</td>
                <td className="p-2">{produto.valor}</td>
                <td className="p-2">{produto.qtd_estoque}</td>
                <td className="p-2">{produto.categoria}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GestaoProdutos;
