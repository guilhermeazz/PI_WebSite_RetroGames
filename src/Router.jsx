import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './containers/login';
import RecuperarSenha from './containers/login'; 
import Cadastro from './containers/Cadastro';

function Router() {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
      </Routes>
    );
  }
  
  export default Router;