import React from 'react';

const botaolc = ({texto, cor, onClick }) => {
    const base = "px-4 py-2 w-full h-10 rounded font-semibold text-white active:bg-gray-400 margin";
    const styles = {
      yellow: "bg-yellow-500 hover:bg-yellow-600",
      green: "bg-green-500 hover:bg-green-600",
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

export default botaolc;