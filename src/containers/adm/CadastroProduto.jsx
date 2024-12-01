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
    plataforma: ''
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in produto) {
      formData.append(key, produto[key]);
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
    <div className="min-h-screen bg-primary-1 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Cadastrar Produto</h1>
      <form onSubmit={handleSubmit} className="bg-primary-3 p-4 rounded-lg flex flex-col space-y-4">
        <label className="flex flex-col">
          Nome:
          <input type="text" id="nome" value={produto.nome} onChange={handleInputChange} required className="p-2 rounded" />
        </label>
        <label className="flex flex-col">
          Descrição:
          <textarea id="descricao" value={produto.descricao} onChange={handleInputChange} required className="p-2 rounded"></textarea>
        </label>
        <label className="flex flex-col">
          Imagem:
          <input type="file" id="imagem" onChange={handleFileChange} required className="p-2 rounded" />
        </label>
        <label className="flex flex-col">
          Valor:
          <input type="number" id="valor" value={produto.valor} onChange={handleInputChange} required className="p-2 rounded" />
        </label>
        <label className="flex flex-col">
          Quantidade em Estoque:
          <input type="number" id="qtd_estoque" value={produto.qtd_estoque} onChange={handleInputChange} required className="p-2 rounded" />
        </label>
        <label className="flex flex-col">
          Promoção:
          <select id="promocao" value={produto.promocao} onChange={handleInputChange} required className="p-2 rounded">
            <option value={false}>Não</option>
            <option value={true}>Sim</option>
          </select>
        </label>
        <label className="flex flex-col">
          Categoria:
          <input type="text" id="categoria" value={produto.categoria} onChange={handleInputChange} required className="p-2 rounded" />
        </label>
        <label className="flex flex-col">
          Plataforma:
          <input type="text" id="plataforma" value={produto.plataforma} onChange={handleInputChange} required className="p-2 rounded" />
        </label>
        <button type="submit" className="bg-primary-4 p-2 rounded text-black hover:bg-primary-5 hover:text-white">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastrarProduto;
