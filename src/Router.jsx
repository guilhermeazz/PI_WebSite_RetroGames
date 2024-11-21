import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './containers/login';
import RecuperarSenha from './containers/login'; 
import Cadastro from './containers/Cadastro';
import Home from './containers/Home';

function Router() {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    );
  }
  
  export default Router;