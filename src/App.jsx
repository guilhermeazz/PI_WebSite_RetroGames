import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './containers/login';
import RecuperarSenha from './containers/login'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/recuperar-senha" element={<RecuperarSenha />} />
    </Routes>
  );
}

export default App;
