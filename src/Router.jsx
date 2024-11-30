import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './containers/login';
import RecuperarSenha from './containers/login';
import Cadastro from './containers/Cadastro';
import Home from './containers/Home';
import MinhaConta from './containers/MinhaConta';
import DadosUsuario from './containers/DadosUsuario';
import AlterarSenha from './containers/AlterarSenha';
import Favoritos from './containers/Favoritos';
import Footer from './containers/Footer';
import CadastroProduto from './containers/CadastroProduto';

function Router() {
  return (
    <div className="flex flex-col min-h-screen"> {/* Container flexível para ocupar a tela inteira */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/recuperar-senha" element={<RecuperarSenha />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro-produto" element={<CadastroProduto />} />
          <Route path="/minha-conta" element={<MinhaConta />}>
            <Route path="dados-usuario" element={<DadosUsuario />} />
            <Route path="alterar-senha" element={<AlterarSenha />} />
            <Route path="favoritos" element={<Favoritos />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default Router;