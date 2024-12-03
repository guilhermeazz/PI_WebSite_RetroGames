import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Nav from '../components/navbar';
import Footer from '../containers/Footer';

const JogoDetalhe = () => {
  const { id } = useParams();
  const [jogo, setJogo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost/retrozone/api/produto/read_single.php?id=${id}`)
      .then(response => response.json())
      .then(data => {
        setJogo({
          ...data,
          valor: parseFloat(data.valor),
          promocao: parseFloat(data.promocao)
        });
      })
      .catch(error => console.error('Erro ao buscar detalhes do jogo:', error));
  }, [id]);

  if (!jogo) {
    return <div className="text-center mt-10">Carregando...</div>;
  }

  const calcularPrecoComDesconto = (valor, porcentagem) => {
    return valor - (valor * (porcentagem / 100));
  };

  const adicionarAoCarrinho = () => {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const itemIndex = carrinho.findIndex(item => item.id === jogo.id);

    if (itemIndex === -1) {
      carrinho.push({ ...jogo, quantidade: 1 });
    } else {
      carrinho[itemIndex].quantidade += 1;
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert('Item adicionado ao carrinho!');
  };

  const adicionarAosFavoritos = () => {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const itemIndex = favoritos.findIndex(item => item.id === jogo.id);

    if (itemIndex === -1) {
      favoritos.push({ ...jogo });
      localStorage.setItem('favoritos', JSON.stringify(favoritos));
      alert('Item adicionado aos favoritos!');
    } else {
      alert('Este item já está nos favoritos!');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Nav />
      <div className="flex-grow container mx-auto px-20 py-10">
        <div className="flex flex-col md:flex-row md:space-x-10">
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-4">{jogo.nome}</h1>
            <p className="text-lg mb-2"><strong>Descrição:</strong> {jogo.descricao}</p>
            <p className="text-lg mb-2"><strong>Categoria:</strong> {jogo.categoria}</p>
            <p className="text-lg mb-2"><strong>Plataforma:</strong> {jogo.plataforma}</p>
            {jogo.promocao > 0 ? (
              <div>
                <span className="text-red-500 font-bold">{jogo.promocao}% OFF</span>
                <p className="text-gray-500 line-through">R${jogo.valor ? jogo.valor.toFixed(2) : 'N/A'}</p>
                <p className="text-green-500 font-bold">R${jogo.valor ? calcularPrecoComDesconto(jogo.valor, jogo.promocao).toFixed(2) : 'N/A'}</p>
              </div>
            ) : (
              <p className="text-black font-bold">R${jogo.valor ? jogo.valor.toFixed(2) : 'N/A'}</p>
            )}
            <div className="mt-4 space-x-4">
              <button 
                className="bg-blue-600 text-white p-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onClick={adicionarAoCarrinho}
              >
                Adicionar ao Carrinho
              </button>
              <button 
                className="bg-green-600 text-white p-4 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                onClick={() => navigate('/carrinho')}
              >
                Ir para o Carrinho
              </button>
              <button 
                className="bg-yellow-500 text-white p-4 rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
                onClick={adicionarAosFavoritos}
              >
                Adicionar aos Favoritos
              </button>
            </div>
          </div>
          <div className="md:w-1/3">
            <img src={`data:image/jpeg;base64,${jogo.imagem}`} alt={jogo.nome} className="w-full h-64 object-cover rounded-lg mb-4" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JogoDetalhe;
