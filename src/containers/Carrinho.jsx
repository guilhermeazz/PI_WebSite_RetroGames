import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/navbar';
import Footer from '../containers/Footer';

const Carrinho = () => {
  const [carrinho, setCarrinho] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    setCarrinho(storedCarrinho);
  }, []);

  const alterarQuantidade = (id, quantidade) => {
    const novoCarrinho = carrinho.map(item => 
      item.id === id ? { ...item, quantidade: item.quantidade + quantidade } : item
    ).filter(item => item.quantidade > 0);

    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
    setCarrinho(novoCarrinho);
  };

  const limparCarrinho = () => {
    localStorage.removeItem('carrinho');
    setCarrinho([]);
  };

  const finalizarCompra = () => {
    alert('Compra finalizada!');
    limparCarrinho();
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Nav />
      <div className="flex-grow container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">Seu Carrinho</h1>
        {carrinho.length > 0 ? (
          <div>
            {carrinho.map(item => (
              <div key={item.id} className="carrinho-item flex items-center mb-4">
                <img src={`data:image/jpeg;base64,${item.imagem}`} alt={item.nome} className="w-24 h-24 object-cover rounded-lg mr-4" />
                <div className="carrinho-item-info flex-grow">
                  <h2 className="text-xl font-bold">{item.nome}</h2>
                  <p className="text-lg">Preço: R${item.valor.toFixed(2)}</p>
                  <p className="text-lg">Quantidade: {item.quantidade}</p>
                </div>
                <div className="carrinho-item-actions">
                  <button 
                    className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mr-2"
                    onClick={() => alterarQuantidade(item.id, 1)}
                  >
                    Adicionar
                  </button>
                  <button 
                    className="bg-red-600 text-white p-2 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                    onClick={() => alterarQuantidade(item.id, -1)}
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}
            <button 
              className="bg-gray-600 text-white p-4 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              onClick={limparCarrinho}
            >
              Limpar Carrinho
            </button>
            <button 
              className="bg-green-600 text-white p-4 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 ml-4"
              onClick={finalizarCompra}
            >
              Finalizar Compra
            </button>
          </div>
        ) : (
          <p>Seu carrinho está vazio.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Carrinho;
