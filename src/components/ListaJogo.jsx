import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ListaJogos = () => {
  const [jogos, setJogos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost/retrozone/api/produto/read.php')
      .then(response => response.json())
      .then(data => {
        const jogosComValorNumerico = data.records.map(jogo => ({
          ...jogo,
          valor: parseFloat(jogo.valor),
          promocao: parseFloat(jogo.promocao)
        }));
        setJogos(jogosComValorNumerico);
      })
      .catch(error => console.error('Erro ao buscar jogos:', error));
  }, []);

  const calcularPrecoComDesconto = (valor, porcentagem) => {
    return valor - (valor * (porcentagem / 100));
  };

  const handleBoxClick = (id) => {
    if (id) {
      navigate(`/jogo/${id}`);
    } else {
      console.error('ID do produto é indefinido.');
    }
  };

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <h1 className="text-2xl font-bold mb-4">Lista de Jogos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {jogos.map(jogo => (
          <div
            key={jogo.id_produto}
            className="bg-white p-4 rounded-lg shadow-xl border border-gray-200 cursor-pointer"
            onClick={() => handleBoxClick(jogo.id_produto)}
          >
            <img src={`data:image/jpeg;base64,${jogo.imagem}`} alt={jogo.nome} className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h2 className="text-xl font-bold mb-2">{jogo.nome}</h2>
            {jogo.promocao > 0 ? (
              <div>
                <span className="text-red-500 font-bold">{jogo.promocao}% OFF</span>
                <p className="text-gray-500 line-through">R${jogo.valor ? jogo.valor.toFixed(2) : 'N/A'}</p>
                <p className="text-green-500 font-bold">R${jogo.valor ? calcularPrecoComDesconto(jogo.valor, jogo.promocao).toFixed(2) : 'N/A'}</p>
              </div>
            ) : (
              <p className="text-black font-bold">R${jogo.valor ? jogo.valor.toFixed(2) : 'N/A'}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaJogos;
