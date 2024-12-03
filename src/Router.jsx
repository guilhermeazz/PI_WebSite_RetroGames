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
import Categorias from './containers/Categorias';
import Jogos from './containers/Jogos';
import JogoDetalhe from './components/jogoDetalhe';
import JogosFiltrados from './containers/JogoCat';
import Carrinho from './containers/Carrinho';
import Pag from './containers/falso_pagamento/Pagamento';
import AlterarSenha from './containers/AlterarSenha';
import MeusPedidos from './containers/MeusPedidos';
import Sobre from './containers/Sobre';
import Ajuda from './containers/Ajuda';

import Admin from './containers/adm/HomeAdm';
import GestaoUsuarios from './containers/adm/GestaoUsuarios';
import GestaoBanners from './containers/adm/GestaoBanner';
import GestaoProdutos from './containers/adm/GestaoProdutos';
import CadastrarBanner from './containers/adm/CadastroBanner';
import CadastrarProduto from './containers/adm/CadastroProduto';
import EditarProduto from './containers/adm/EditarProduto';
import EditarUsuario from './containers/adm/EditarUser';
import EditarBanner from './containers/adm/EditarBanner';

function AppRouter() {
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

          {/* Seção de 'Minha Conta' */}
          <Route path="/minha-conta" element={<MinhaConta />} />

          {/* Rotas separadas */}
          <Route path="/dados-usuario" element={<DadosUsuario />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/cadastro-produto" element={<CadastroProduto />} />
          <Route path="/pagamento" element={<Pag />} /> {/* Confirmação de pagamento */}
          <Route path="/alterar-senha" element={<AlterarSenha />} />
          <Route path="/meus-pedidos" element={<MeusPedidos />} />

          {/* Outras rotas */}
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/jogos" element={<Jogos />} />
          <Route path="/jogo/:id" element={<JogoDetalhe />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/ajuda" element={<Ajuda />} />

          <Route path="/jogos/plataforma/:valor" element={<JogosFiltrados />} /> 
          <Route path="/jogos/categoria/:valor" element={<JogosFiltrados />} />

          <Route path="/admin" element={<Admin />} /> 
          <Route path="/gestao-usuarios" element={<GestaoUsuarios />} /> 
          <Route path="/gestao-produtos" element={<GestaoProdutos />} /> 
          <Route path="/cadastrar-produto" element={<CadastrarProduto />} /> 
          <Route path="/gestao-banner" element={<GestaoBanners />} /> 
          <Route path="/cadastrar-banner" element={<CadastrarBanner />} />
          <Route path="/editar-produto/:id" element={<EditarProduto />} />
          <Route path="/editar-usuario/:id" element={<EditarUsuario />} />
          <Route path="/editar-banner/:id" element={<EditarBanner />} />
        </Routes>
      </div>
    </div>
  );
}

export default AppRouter;
