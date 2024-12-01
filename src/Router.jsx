import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './containers/login';
import RecuperarSenha from './containers/login';
import Cadastro from './containers/Cadastro';
import Home from './containers/Home';
import MinhaConta from './containers/MinhaConta';
import DadosUsuario from './containers/DadosUsuario';
import AlterarDados from './containers/AlterarDados';
import Favoritos from './containers/Favoritos';
import Footer from './containers/Footer';
import CadastroProduto from './containers/CadastroProduto';

function Router() {
  const location = useLocation();

  // Condição para verificar se estamos nas rotas de login ou cadastro
  const isAuthPage = location.pathname === '/' || location.pathname === '/cadastro' || location.pathname === '/recuperar-senha';

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/recuperar-senha" element={<RecuperarSenha />} />
          <Route path="/home" element={<Home />} />
          <Route path="/minha-conta" element={<MinhaConta />}>
            <Route path="dados-usuario" element={<DadosUsuario />} />
            <Route path="alterar-dados" element={<AlterarDados />} />
            <Route path="favoritos" element={<Favoritos />} />
            <Route path="cadastro-produto" element={<CadastroProduto />} />
          </Route>
        </Routes>
      </div>
      {!isAuthPage && <Footer />}
    </div>
  );
}

export default Router;
