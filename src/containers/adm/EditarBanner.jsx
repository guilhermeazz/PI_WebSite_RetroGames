import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditarBanner = () => {
  const { id } = useParams();
  const [banner, setBanner] = useState({
    descricao: '',
    imagem: null,
    link: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost/retrozone/api/promocao/read_single.php?id=${id}`)
      .then((response) => response.json())
      .then((data) => setBanner(data))
      .catch((error) => console.error('Erro ao buscar detalhes do banner:', error));
  }, [id]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setBanner((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleFileChange = (e) => {
    setBanner((prevState) => ({
      ...prevState,
      imagem: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('id', id);
    formData.append('descricao', banner.descricao);
    formData.append('imagem', banner.imagem);
    formData.append('link', banner.link);

    try {
      const response = await fetch('http://localhost/retrozone/api/promocao/update.php', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      alert(data.message);
      navigate('/gestao-banners');
    } catch (error) {
      console.error('Erro ao atualizar banner:', error);
      alert('Erro ao atualizar banner');
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <h1 className="text-3xl font-semibold text-blue-900 mb-6">Editar Banner</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-blue-100 shadow-lg p-6 rounded-lg space-y-6 max-w-4xl mx-auto"
      >
        <label className="block">
          <span className="text-gray-700">Descrição:</span>
          <textarea
            id="descricao"
            value={banner.descricao}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-200"
          ></textarea>
        </label>
        <label className="block">
          <span className="text-gray-700">Imagem:</span>
          <input
            type="file"
            id="imagem"
            onChange={handleFileChange}
            className="mt-1 block w-full text-gray-700 border-gray-300 rounded-md shadow-sm"
          />
          {banner.imagem && (
            <img
              src={`data:image/jpeg;base64,${banner.imagem}`}
              alt="Banner"
              className="mt-2 w-full h-48 object-cover rounded-md"
            />
          )}
        </label>
        <label className="block">
          <span className="text-gray-700">Link:</span>
          <input
            type="text"
            id="link"
            value={banner.link}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-200"
          />
        </label>
        <div className="flex justify-between space-x-4">
          <button
            type="submit"
            className="w-1/2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditarBanner;
