import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div className="min-h-screen bg-primary-1 text-white flex flex-col items-center">
      <div className="bg-primary-2 w-full py-4 flex justify-center">
        <h1 className="text-3xl font-bold">Painel do Administrador</h1>
      </div>
      <div className="bg-primary-3 w-3/4 mt-10 p-6 rounded-lg flex flex-col space-y-4 text-black font-bold">
        <Link to="/gestao-usuarios" className="bg-primary-4 p-4 rounded-lg text-center hover:bg-primary-5 hover:text-white">
          Gestão de Usuários
        </Link>
        <Link to="/gestao-produtos" className="bg-primary-4 p-4 rounded-lg text-center hover:bg-primary-5 hover:text-white">
          Gestão de Produtos
        </Link>
        <Link to="/cadastrar-produto" className="bg-primary-4 p-4 rounded-lg text-center hover:bg-primary-5 hover:text-white">
          Cadastrar Produto
        </Link>
        <Link to="/gestao-banner" className="bg-primary-4 p-4 rounded-lg text-center hover:bg-primary-5 hover:text-white">
          Gestão de Banners
        </Link>
        <Link to="/cadastrar-banner" className="bg-primary-4 p-4 rounded-lg text-center hover:bg-primary-5 hover:text-white">
          Cadastrar Banner
        </Link>
      </div>
    </div>
  );
}

export default Admin;
