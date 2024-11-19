import React from 'react';
import { Link } from 'react-router-dom';

const BotaoLink = ({ texto, cor, onClick, link }) => {
  const base = "px-4 py-2 w-full h-10 rounded-2xl font-semibold text-white active:bg-gray-400 margin";

  const styles = {
    yellow: "bg-yellow-500 hover:bg-yellow-600",
    green: "bg-green-500 hover:bg-green-600",
    none: 'bg-transparent text-black hover:text-blue-500',
  };

  return (
    <Link
      to={link}
      className={`${base} ${styles[cor]}`}
      onClick={onClick}
    >
      {texto}
    </Link>
  );
};

export default BotaoLink;