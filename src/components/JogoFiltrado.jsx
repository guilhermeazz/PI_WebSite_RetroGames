import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const JogosFiltrados = () => {
  const { tipo, valor } = useParams();
  const [jogos, setJogos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJogos = async () => {
      let url = '';
      if (tipo === 'plataforma') {
        url = `/api/produto/read_by_platform.php?plataforma=${encodeURIComponent(valor)}`;
      } else if (tipo === 'categoria') {
        url = `/api/produto/read_by_category.php?categoria=${encodeURIComponent(valor)}`;
      }

      console.log('Fetching URL:', url); // Adicionando log para debug

      try {
        const response = await fetch(url);
        const textResponse = await response.text();

        // Verifica se a resposta é JSON válida
        try {
          const data = JSON.parse(textResponse);
          const jogosComValorNumerico = data.records.map(jogo => ({
            ...jogo,
            valor: parseFloat(jogo.valor),
            promocao: parseFloat(jogo.promocao)
          }));
          setJogos(jogosComValorNumerico);
        } catch (jsonError) {
          console.error('Resposta não é um JSON válido:', textResponse);
          throw new Error(`Resposta não é um JSON válido: ${textResponse}`);
        }
      } catch (error) {
        setError(error.message);
        console.error('Erro ao buscar jogos:', error);
      }
    };

    fetchJogos();
  }, [tipo, valor]);

  const calcularPrecoComDesconto = (valor, porcentagem) => {
    return valor - (valor * (porcentagem / 100));
  };

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <h1 className="text-2xl font-bold mb-4">Jogos - {valor}</h1>
      {error && <p className="text-red-500">Erro: {error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {jogos.map(jogo => (
          <div key={jogo.id_produto} className="bg-white p-4 rounded-lg shadow-xl border border-gray-200">
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

export default JogosFiltrados;
