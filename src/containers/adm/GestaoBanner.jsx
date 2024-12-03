import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GestaoBanners = () => {
  const [banners, setBanners] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost/retrozone/api/promocao/read.php')
      .then((response) => response.json())
      .then((data) => setBanners(data.records))
      .catch((error) => console.error('Erro ao buscar banners:', error));
  }, []);

  const deletarBanner = (id) => {
    if (window.confirm('Tem certeza que deseja deletar este banner?')) {
      fetch(`http://localhost/retrozone/api/promocao/delete.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_banner: id }),
      })
        .then((response) => response.json())
        .then(() => {
          setBanners(banners.filter((banner) => banner.id !== id));
          alert('Banner deletado com sucesso!');
        })
        .catch((error) => console.error('Erro ao deletar banner:', error));
    }
  };

  const editarBanner = (id) => {
    navigate(`/editar-banner/${id}`);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Cabeçalho */}
      <header className="p-6 border-b border-gray-200">
        <h1 className="text-3xl font-bold text-blue-900">Gestão de Banners</h1>
        <p className="text-gray-600">Gerencie, edite e exclua os Banners do sistema.</p>
      </header>

      {/* Conteúdo */}
      <main className="p-6">
        <div className="bg-blue-50 p-6 rounded-lg shadow-md overflow-x-auto">
          <table className="w-full text-left border-collapse border border-blue-200">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="p-3 border border-blue-200">ID</th>
                <th className="p-3 border border-blue-200">Descrição</th>
                <th className="p-3 border border-blue-200">Link</th>
                <th className="p-3 border border-blue-200">Imagem</th>
                <th className="p-3 border border-blue-200 text-center">Ações</th>
              </tr>
            </thead>
            <tbody>
              {banners.length > 0 ? (
                banners.map((banner, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-blue-100 transition"
                  >
                    <td className="p-3 border border-blue-200">{banner.id}</td>
                    <td className="p-3 border border-blue-200">{banner.descricao}</td>
                    <td className="p-3 border border-blue-200">{banner.link}</td>
                    <td className="p-3 border border-blue-200">
                      <img
                        src={`data:image/jpeg;base64,${banner.imagem}`}
                        alt="Banner"
                        className="h-16 rounded-md shadow-sm"
                      />
                    </td>
                    <td className="p-3 flex justify-center gap-2">
                      <button
                        className="bg-red-600 text-white py-1 px-4 rounded hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-red-500"
                        onClick={() => deletarBanner(banner.id)}
                      >
                        Deletar
                      </button>
                      <button
                        className="bg-blue-400 text-white py-1 px-4 rounded hover:bg-blue-500 transition focus:outline-none focus:ring-2 focus:ring-blue-300"
                        onClick={() => editarBanner(banner.id)}
                      >
                        Editar
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center p-6 text-gray-500">
                    Nenhum banner encontrado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default GestaoBanners;
