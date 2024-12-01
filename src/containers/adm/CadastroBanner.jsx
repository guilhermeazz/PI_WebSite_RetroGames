import React, { useState } from 'react';

const CadastrarBanner = () => {
  const [banner, setBanner] = useState({
    descricao: '',
    imagem: null,
    link: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setBanner(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleFileChange = (e) => {
    setBanner(prevState => ({
      ...prevState,
      imagem: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in banner) {
      formData.append(key, banner[key]);
    }

    try {
      const response = await fetch('http://localhost/retrozone/api/promocao/create.php', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      alert(data.message);

    } catch (error) {
      console.error("Erro ao cadastrar banner:", error);
      alert("Erro ao cadastrar banner");
    }
  };

  return (
    <div className="min-h-screen bg-primary-1 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Cadastrar Banner</h1>
      <form onSubmit={handleSubmit} className="bg-primary-3 p-4 rounded-lg flex flex-col space-y-4 text-black">
        <label className="flex flex-col">
          Descrição:
          <textarea id="descricao" value={banner.descricao} onChange={handleInputChange} required className="p-2 rounded"></textarea>
        </label>
        <label className="flex flex-col">
          Imagem:
          <input type="file" id="imagem" onChange={handleFileChange} required className="p-2 rounded" />
        </label>
        <label className="flex flex-col">
          Link:
          <input type="text" id="link" value={banner.link} onChange={handleInputChange} required className="p-2 rounded" />
        </label>
        <button type="submit" className="bg-primary-4 p-2 rounded text-black hover:bg-primary-5 hover:text-white">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastrarBanner;
