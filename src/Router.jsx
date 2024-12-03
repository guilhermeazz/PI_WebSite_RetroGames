import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './containers/login';
import Cadastro from './containers/Cadastro';
import Home from './containers/Home';
import MinhaConta from './containers/MinhaConta';
import DadosUsuario from './containers/DadosUsuario';
import Favoritos from './containers/Favoritos';
import Footer from './containers/Footer';
import CadastroProduto from './containers/CadastroProduto';

import Pagamento from './containers/falso_pagamento/Pagamento';

import Admin from './containers/adm/HomeAdm';
import GestaoUsuarios from './containers/adm/GestaoUsuarios';
import GestaoBanners from './containers/adm/GestaoBanner';
import GestaoProdutos from './containers/adm/GestaoProdutos';
import CadastrarBanner from './containers/adm/CadastroBanner';
import CadastrarProduto from './containers/adm/CadastroProduto';

function Router() {
  const location = useLocation();

  // Condição para verificar se estamos nas rotas de login ou cadastro
  const isAuthPage = location.pathname === '/' || location.pathname === '/cadastro' || location.pathname === '/recuperar-senha';

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Routes>
          {/* Páginas de autenticação */}
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />

          {/* Páginas de usuário autenticado */}
          <Route path="/home" element={<Home />} />

          {/* Seção de 'Minha Conta' com sub-rotas */}
          <Route path="/minha-conta" element={<MinhaConta />}>
            <Route path="dados-usuario" element={<DadosUsuario />} />
            <Route path="favoritos" element={<Favoritos />} />
            <Route path="cadastro-produto" element={<CadastroProduto />} />
            <Route path="pagamento" element={<Pagamento />} /> {/* Confirmação de pagamento */}
          </Route>

          {/* Rotas do Admin */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/gestao-usuarios" element={<GestaoUsuarios />} />
          <Route path="/gestao-produtos" element={<GestaoProdutos />} />
          <Route path="/cadastrar-produto" element={<CadastrarProduto />} />
          <Route path="/gestao-banner" element={<GestaoBanners />} />
          <Route path="/cadastrar-banner" element={<CadastrarBanner />} />
        </Routes>
      </div>
    </div>
  );
}

export default Router;
