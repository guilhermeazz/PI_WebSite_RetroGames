import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetching banners (promoções) from the API
    fetch('http://localhost/retrozone/api/promocao/read.php')
      .then(response => response.json())
      .then(data => setBanners(data.records))
      .catch(error => console.error('Erro ao buscar banners:', error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [banners]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const handleImageClick = (link) => {
    navigate(link);
  };

  return (
    <div className="relative w-full h-64 bg-primary-3 rounded-lg overflow-hidden">
      {banners.length > 0 && (
        <>
          <img
            src={`data:image/jpeg;base64,${banners[currentIndex].imagem}`}
            alt="Banner"
            className="w-full h-full object-cover"
            onClick={() => handleImageClick(`/produto/${banners[currentIndex].id_produto}`)}
          />
          <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-primary-5 text-white p-2 rounded-full" onClick={handlePrevious}>
            &#10094;
          </button>
          <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-primary-5 text-white p-2 rounded-full" onClick={handleNext}>
            &#10095;
          </button>
        </>
      )}
    </div>
  );
};

export default Banner;
