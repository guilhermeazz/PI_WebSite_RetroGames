import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditarProduto = () => {
  const { id } = useParams();
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
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost/retrozone/api/produto/read_single.php?id=${id}`)
      .then(response => response.json())
      .then(data => {
        setProduto({
          ...data,
          valor: parseFloat(data.valor),
          qtd_estoque: parseInt(data.qtd_estoque),
          promocao: data.porcentagem_promocao > 0,
          porcentagem_promocao: parseFloat(data.porcentagem_promocao)
        });
      })
      .catch(error => console.error('Erro ao buscar detalhes do produto:', error));
  }, [id]);

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
    formData.append('id_produto', id);

    try {
      const response = await fetch('http://localhost/retrozone/api/produto/update.php', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      alert(data.message);
      navigate('/gestao-produtos');

    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
      alert("Erro ao atualizar produto");
    }
  };

  return (
    <div className="min-h-screen bg-white text-blue-800 p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">Editar Produto</h1>
      <form onSubmit={handleSubmit} className="bg-blue-100 p-6 rounded-lg shadow-lg max-w-2xl mx-auto space-y-6">
        <label className="flex flex-col">
          Nome:
          <input type="text" id="nome" value={produto.nome} onChange={handleInputChange} required className="p-3 rounded border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </label>
        <label className="flex flex-col">
          Descrição:
          <textarea id="descricao" value={produto.descricao} onChange={handleInputChange} required className="p-3 rounded border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </label>
        <label className="flex flex-col">
          Imagem:
          <input type="file" id="imagem" onChange={handleFileChange} className="p-3 rounded border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          {produto.imagem && (
            <img src={`data:image/jpeg;base64,${produto.imagem}`} alt={produto.nome} className="w-full h-48 object-cover rounded-t-lg mt-2"/>
          )}
        </label>
        <label className="flex flex-col">
          Valor:
          <input type="number" id="valor" value={produto.valor} onChange={handleInputChange} required className="p-3 rounded border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </label>
        <label className="flex flex-col">
          Quantidade em Estoque:
          <input type="number" id="qtd_estoque" value={produto.qtd_estoque} onChange={handleInputChange} required className="p-3 rounded border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </label>
        <label className="flex flex-col">
          Promoção:
          <select id="promocao" value={produto.promocao.toString()} onChange={handlePromocaoChange} required className="p-3 rounded border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="false">Não</option>
            <option value="true">Sim</option>
          </select>
        </label>
        {produto.promocao && (
          <label className="flex flex-col">
            Porcentagem da Promoção:
            <input type="number" id="porcentagem_promocao" value={produto.porcentagem_promocao} onChange={handleInputChange} required className="p-3 rounded border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </label>
        )}
        <label className="flex flex-col">
          Categoria:
          <select id="categoria" value={produto.categoria} onChange={handleInputChange} required className="p-3 rounded border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Selecione uma categoria</option>
            <option value="Ação">Ação</option>
            <option value="Aventura">Aventura</option>
            <option value="Corrida">Corrida</option>
            <option value="Puzzle">Puzzle</option>
          </select>
        </label>
        <label className="flex flex-col">
          Plataforma:
          <select id="plataforma" value={produto.plataforma} onChange={handleInputChange} required className="p-3 rounded border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Selecione uma plataforma</option>
            <option value="PlayStation 1">PlayStation 1</option>
            <option value="PlayStation 2">PlayStation 2</option>
            <option value="GameCube">GameCube</option>
            <option value="Super Nintendo">Super Nintendo</option>
            <option value="Atari">Atari</option>
          </select>
        </label>
        <div className="flex justify-center space-x-4">
          <button type="submit" className="bg-blue-300 text-white py-2 px-4 rounded hover:bg-blue-400 transition">Salvar</button>
          
        </div>
      </form>
    </div>
  );
}

export default EditarProduto;
