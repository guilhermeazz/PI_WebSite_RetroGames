import React from 'react';

const botao = ({texto, cor, onClick}) => {
    const base = "px-4 py-2 w-full h-10 rounded-2xl font-semibold text-white active:bg-gray-400 margin";
    const styles = {
      yellow: "bg-yellow-500 hover:bg-yellow-600",
      green: "bg-green-500 hover:bg-green-600",
      none: 'bg-transparent text-black hover:text-blue',
    };
  
    return (
      <button
        className={`${base} ${styles[cor]}`}
        onClick={onClick}
      >
        {texto}
      </button>
    );
  };

export default botao;