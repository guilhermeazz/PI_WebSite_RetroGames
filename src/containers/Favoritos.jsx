import React, { useEffect, useState } from 'react';  

const Favoritos = () => {  
  const [favoritos, setFavoritos] = useState([]);  

  useEffect(() => {  
    // Função para obter os favoritos do backend  
    const fetchFavoritos = async () => {  
      try {  
        const response = await fetch('URL_DA_SUA_API/favoritos.php'); // Substitua pela URL da sua API  
        const data = await response.json();  
        setFavoritos(data);  
      } catch (error) {  
        console.error('Erro ao buscar favoritos:', error);  
      }  
    };  

    fetchFavoritos();  
  }, []);  

  return (  
    <div>  
      <h1>Meus Favoritos</h1>  
      {favoritos.length === 0 ? (  
        <p>Você não tem favoritos.</p>  
      ) : (  
        <ul>  
          {favoritos.map((item) => (  
            <li key={item.id}>  
              <img src={item.imagem} alt={item.nome} />  
              <span>{item.nome}</span>  
              {/* Aqui pode adicionar botões para remover ou detalhar o item */}  
            </li>  
          ))}  
        </ul>  
      )}  
    </div>  
  );  
};  

export default Favoritos;