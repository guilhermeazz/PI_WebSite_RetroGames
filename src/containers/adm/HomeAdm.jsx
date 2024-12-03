import React from 'react';
import { Link } from 'react-router-dom';
import Engen from '../../assets/engrenagens.png';

const Admin = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-blue-900 w-full py-6 shadow-md">
        <h1 className="text-4xl font-semibold text-white text-center">
          Painel do Administrador
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="flex w-full max-w-6xl gap-8">
          {/* Botões (lado esquerdo) */}
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-blue-900 mb-4">
                Usuários
              </h2>
              <div className="flex flex-col gap-4">
                <Link
                  to="/gestao-usuarios"
                  className="bg-blue-500 text-white py-3 px-4 text-center rounded-lg shadow-md hover:bg-blue-600 transition"
                >
                  Gestão de Usuários
                </Link>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold text-blue-900 mb-4">
                Produtos
              </h2>
              <div className="flex flex-col gap-4">
                <Link
                  to="/gestao-produtos"
                  className="bg-blue-500 text-white py-3 px-4 text-center rounded-lg shadow-md hover:bg-blue-600 transition"
                >
                  Gestão de Produtos
                </Link>
                <Link
                  to="/cadastrar-produto"
                  className="bg-blue-500 text-white py-3 px-4 text-center rounded-lg shadow-md hover:bg-blue-600 transition"
                >
                  Cadastrar Produto
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-blue-900 mb-4">
                Banners
              </h2>
              <div className="flex flex-col gap-4">
                <Link
                  to="/gestao-banner"
                  className="bg-blue-500 text-white py-3 px-4 text-center rounded-lg shadow-md hover:bg-blue-600 transition"
                >
                  Gestão de Banners
                </Link>
                <Link
                  to="/cadastrar-banner"
                  className="bg-blue-500 text-white py-3 px-4 text-center rounded-lg shadow-md hover:bg-blue-600 transition"
                >
                  Cadastrar Banner
                </Link>
              </div>
            </div>
          </div>

          {/* Figura (lado direito) */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={Engen}
              alt="Administração"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 py-4 text-center text-white text-sm">
        &copy; {new Date().getFullYear()} Admin Dashboard
      </footer>
    </div>
  );
};

export default Admin;
