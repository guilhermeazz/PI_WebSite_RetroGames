import React, { useState, useEffect } from 'react';

const GestaoBanners = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetch('http://localhost/retrozone/api/promocao/read.php')
      .then(response => response.json())
      .then(data => setBanners(data.records))
      .catch(error => console.error('Erro ao buscar banners:', error));
  }, []);

  return (
    <div className="min-h-screen bg-primary-1 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Gestão de Banners</h1>
      <div className="bg-primary-3 p-4 rounded-lg">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="p-2">ID</th>
              <th className="p-2">Descrição</th>
              <th className="p-2">Link</th>
              <th className="p-2">Imagem</th>
            </tr>
          </thead>
          <tbody>
            {banners.map(banner => (
              <tr key={banner.id}>
                <td className="p-2">{banner.id}</td>
                <td className="p-2">{banner.descricao}</td>
                <td className="p-2">{banner.link}</td>
                <td className="p-2">
                  <img src={`data:image/jpeg;base64,${banner.imagem}`} alt="Banner" className="h-16" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GestaoBanners;
