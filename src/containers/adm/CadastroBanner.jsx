import React, { useState } from 'react';

const CadastrarBanner = () => {
  const [banner, setBanner] = useState({
    descricao: '',
    imagem: null,
    link: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setBanner((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleFileChange = (e) => {
    setBanner((prevState) => ({
      ...prevState,
      imagem: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('descricao', banner.descricao);
    formData.append('imagem', banner.imagem);
    formData.append('link', banner.link);

    try {
      const response = await fetch('http://localhost/retrozone/api/promocao/create.php', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Erro ao cadastrar banner:', error);
      alert('Erro ao cadastrar banner');
    }
  };

  return (
    <div className="min-h-screen bg-white text-blue-800 p-8">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Cadastrar Banner</h1>
      <form onSubmit={handleSubmit} className="bg-blue-100 p-6 rounded-lg shadow-lg flex flex-col space-y-6">
        
        <label className="flex flex-col">
          <span className="text-lg font-medium text-blue-800 mb-2">Descrição</span>
          <textarea
            id="descricao"
            value={banner.descricao}
            onChange={handleInputChange}
            required
            className="p-4 border-2   rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-4"
          ></textarea>
        </label>

        <label className="flex flex-col">
          <span className="text-lg font-medium text-blue-800 mb-2">Imagem</span>
          <input
            type="file"
            id="imagem"
            onChange={handleFileChange}
            required
            className="p-4 border-2   rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-4 bg-white"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-lg font-medium text-blue-800 mb-2">Link</span>
          <input
            type="text"
            id="link"
            value={banner.link}
            onChange={handleInputChange}
            required
            className="p-4 border-2   rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-4"
          />
        </label>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-primary-4 border-blue-500  px-6 py-2 rounded-lg hover:bg-primary-5 focus:outline-none focus:ring-2 focus:ring-primary-4  hover:text-white"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CadastrarBanner;
