import React from 'react';
import Nav from '../components/navbar';
import Footer from '../containers/Footer';

const Sobre = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-col min-h-screen bg-white text-black items-center justify-center">
        <div className="flex-grow container mx-auto px-4 py-10 flex flex-col items-center">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-2xl">
            <h1 className="text-3xl font-bold mb-6 text-center">Sobre o Projeto</h1>
            <div className="space-y-4">
              <section>
                <h2 className="text-2xl font-semibold mb-2">Descrição do Projeto</h2>
                <p>
                  Nosso projeto é uma plataforma completa e inovadora para o gerenciamento e compra de jogos retrô. 
                  Visando proporcionar a melhor experiência para os usuários, a plataforma permite explorar uma vasta 
                  coleção de jogos, adicioná-los aos favoritos, realizar compras e muito mais. A interface intuitiva 
                  garante que tanto novos usuários quanto os mais experientes possam navegar e utilizar todas as funcionalidades
                  com facilidade.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-2">Funcionalidades</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Catálogo extenso de jogos retrô</li>
                  <li>Adição de jogos aos favoritos</li>
                  <li>Carrinho de compras integrado</li>
                  <li>Sistema de cadastro e login de usuários</li>
                  <li>Gestão de pedidos</li>
                  <li>Área administrativa para gestão de usuários, produtos e banners</li>
                  <li>Filtros de busca por plataforma e categoria</li>
                  <li>Página de detalhes de cada jogo</li>
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-2">Termos de Uso</h2>
                <p>
                  Ao utilizar nossa plataforma, você concorda em cumprir com todos os termos e condições estabelecidos. 
                  Estes termos foram criados para garantir a segurança e a satisfação de todos os usuários. A utilização 
                  do conteúdo disponibilizado na plataforma é permitida apenas para fins pessoais e não comerciais, a 
                  menos que haja uma autorização explícita por escrito.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-2">Política de Privacidade</h2>
                <p>
                  Nós levamos a sua privacidade a sério. As informações pessoais coletadas durante a utilização da 
                  plataforma são usadas exclusivamente para melhorar sua experiência e garantir a eficácia dos nossos 
                  serviços. Não compartilhamos suas informações pessoais com terceiros sem o seu consentimento explícito, 
                  exceto quando exigido por lei. Para mais detalhes, consulte nossa 
                  <a href="https://privacy.microsoft.com/en-us/privacystatement" className="text-blue-500 hover:underline">
                    Política de Privacidade
                  </a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sobre;
