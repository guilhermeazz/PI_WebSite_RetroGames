import React, { useState } from 'react';

const CadastrarProduto = () => {
  const [produto, setProduto] = useState({
    nome: '',
    descricao: '',
    imagem: null,
    valor: '',
    qtd_estoque: '',
    promocao: false,
    categoria: '',
    plataforma: '',
    porcentagem_promocao: 0 // Valor inicial
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setProduto(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleFileChange = (e) => {
    setProduto(prevState => ({
      ...prevState,
      imagem: e.target.files[0]
    }));
  };

  const handlePromocaoChange = (e) => {
    const { value } = e.target;
    setProduto(prevState => ({
      ...prevState,
      promocao: value === 'true',
      porcentagem_promocao: value === 'true' ? prevState.porcentagem_promocao : 0
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in produto) {
      if (key !== 'promocao') { // Ignorar o campo promocao, pois estamos salvando porcentagem_promocao em seu lugar
        formData.append(key, produto[key]);
      } else {
        formData.append(key, produto.porcentagem_promocao);
      }
    }

    try {
      const response = await fetch('http://localhost/retrozone/api/produto/create.php', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      alert(data.message);

    } catch (error) {
      console.error("Erro ao cadastrar produto:", error);
      alert("Erro ao cadastrar produto");
    }
  };

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <h1 className="text-3xl font-semibold text-blue-900 mb-6">Cadastrar Produto</h1>
      <form onSubmit={handleSubmit} className="bg-blue-100 shadow-lg p-6 rounded-lg max-w-4xl mx-auto space-y-6">
        <label className="flex flex-col">
          <span className="text-gray-700">Nome:</span>
          <input
            type="text"
            id="nome"
            value={produto.nome}
            onChange={handleInputChange}
            required
            className="p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-gray-700">Descrição:</span>
          <textarea
            id="descricao"
            value={produto.descricao}
            onChange={handleInputChange}
            required
            className="p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          ></textarea>
        </label>
        <label className="flex flex-col">
          <span className="text-gray-700">Imagem:</span>
          <input
            type="file"
            id="imagem"
            onChange={handleFileChange}
            required
            className="p-2 rounded-md border-gray-300 shadow-sm"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-gray-700">Valor:</span>
          <input
            type="number"
            id="valor"
            value={produto.valor}
            onChange={handleInputChange}
            required
            className="p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-gray-700">Quantidade em Estoque:</span>
          <input
            type="number"
            id="qtd_estoque"
            value={produto.qtd_estoque}
            onChange={handleInputChange}
            required
            className="p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-gray-700">Promoção:</span>
          <select
            id="promocao"
            value={produto.promocao}
            onChange={handlePromocaoChange}
            required
            className="p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          >
            <option value={false}>Não</option>
            <option value={true}>Sim</option>
          </select>
        </label>
        {produto.promocao && (
          <label className="flex flex-col">
            <span className="text-gray-700">Porcentagem da Promoção:</span>
            <input
              type="number"
              id="porcentagem_promocao"
              value={produto.porcentagem_promocao}
              onChange={handleInputChange}
              required
              className="p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </label>
        )}
        <label className="flex flex-col">
          <span className="text-gray-700">Categoria:</span>
          <select
            id="categoria"
            value={produto.categoria}
            onChange={handleInputChange}
            required
            className="p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          >
            <option value="">Selecione uma categoria</option>
            <option value="Ação">Ação</option>
            <option value="Aventura">Aventura</option>
            <option value="Corrida">Corrida</option>
            <option value="Puzzle">Puzzle</option>
          </select>
        </label>
        <label className="flex flex-col">
          <span className="text-gray-700">Plataforma:</span>
          <select
            id="plataforma"
            value={produto.plataforma}
            onChange={handleInputChange}
            required
            className="p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          >
            <option value="">Selecione uma plataforma</option>
            <option value="PlayStation 1">PlayStation 1</option>
            <option value="PlayStation 2">PlayStation 2</option>
            <option value="GameCube">GameCube</option>
            <option value="Super Nintendo">Super Nintendo</option>
            <option value="Atari">Atari</option>
          </select>
        </label>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default CadastrarProduto;
