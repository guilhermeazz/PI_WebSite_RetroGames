import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ListaJogos = () => {
  const [jogos, setJogos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost/retrozone/api/produto/read.php')
      .then((response) => response.json())
      .then((data) => {
        const jogosComValorNumerico = data.records.map((jogo) => ({
          ...jogo,
          valor: parseFloat(jogo.valor),
          promocao: parseFloat(jogo.promocao),
        }));
        setJogos(jogosComValorNumerico);
      })
      .catch((error) => console.error('Erro ao buscar jogos:', error));
  }, []);

  const calcularPrecoComDesconto = (valor, porcentagem) => {
    return valor - valor * (porcentagem / 100);
  };

  const handleBoxClick = (id) => {
    if (id) {
      navigate(`/jogo/${id}`);
    } else {
      console.error('ID do produto é indefinido.');
    }
  };

  // Função para limitar a descrição a um número máximo de caracteres
  const limitarDescricao = (descricao, maxCaracteres = 100) => {
    if (descricao.length > maxCaracteres) {
      return descricao.substring(0, maxCaracteres) + '...';
    }
    return descricao;
  };

  return (
    <div className="min-h-screen bg-white text-black p-6 flex flex-col gap-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Lista de Jogos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {jogos.map((jogo) => (
          <div
            key={jogo.id_produto}
            className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl"
            onClick={() => handleBoxClick(jogo.id_produto)}
          >
            {/* Foto do produto */}
            <img
              src={`data:image/jpeg;base64,${jogo.imagem}`}
              alt={jogo.nome}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />

            {/* Nome do produto */}
            <h2 className="text-xl font-semibold mb-2">{jogo.nome}</h2>

            {/* Descrição limitada */}
            <p className="text-gray-600 mb-4 text-sm">{limitarDescricao(jogo.descricao)}</p>

            {/* Preço original, promoção e preço com desconto */}
            <div className="flex items-center mb-4">
              {jogo.promocao > 0 ? (
                <>
                  <p className="text-gray-500 line-through text-lg">
                    R${jogo.valor ? jogo.valor.toFixed(2) : 'N/A'}
                  </p>
                  <span className="ml-2 text-red-500 font-semibold text-lg">
                    {jogo.promocao}% OFF
                  </span>
                </>
              ) : (
                <p className="text-black font-semibold text-lg">
                  R${jogo.valor ? jogo.valor.toFixed(2) : 'N/A'}
                </p>
              )}
            </div>

            {/* Preço com promoção */}
            {jogo.promocao > 0 && (
              <p className="text-green-500 font-semibold text-lg">
                R${jogo.valor ? calcularPrecoComDesconto(jogo.valor, jogo.promocao).toFixed(2) : 'N/A'}
              </p>
            )}

            {/* Botão de detalhes */}
            <div className="mt-auto">
              <button
                className="w-full py-2 bg-primary-2 text-white font-semibold rounded-lg hover:bg-primary-3 transition-all"
                onClick={() => handleBoxClick(jogo.id_produto)}
              >
                Ver Detalhes
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaJogos;
