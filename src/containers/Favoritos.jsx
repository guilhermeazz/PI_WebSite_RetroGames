import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/navbar';
import Footer from '../containers/Footer';

const Favoritos = () => {
  const [favoritos, setFavoritos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedFavoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    setFavoritos(storedFavoritos);
  }, []);

  const removerFavorito = (id) => {
    const novosFavoritos = favoritos.filter((item) => item.id !== id);
    localStorage.setItem('favoritos', JSON.stringify(novosFavoritos));
    setFavoritos(novosFavoritos);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Nav />
      <div className="flex-grow container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">Seus Favoritos</h1>
        {favoritos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoritos.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg p-4 flex flex-col items-center"
              >
                <img
                  src={`data:image/jpeg;base64,${item.imagem}`}
                  alt={item.nome}
                  className="w-32 h-32 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-bold">{item.nome}</h2>
                <p className="text-lg font-bold text-green-500">
                  R${item.valor.toFixed(2)}
                </p>
                <div className="flex mt-4 space-x-4">
                  <button
                    className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    onClick={() => navigate(`/jogo/:id`)}
                  >
                    Ver Produto
                  </button>
                  <button
                    className="bg-red-600 text-white p-2 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                    onClick={() => removerFavorito(item.id)}
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-lg text-center">Você ainda não tem favoritos.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Favoritos;
