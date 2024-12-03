import React from 'react';
import Nav from '../components/navbar';
import Footer from '../containers/Footer';

const Ajuda = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-col min-h-screen bg-white text-black items-center justify-center">
        <div className="flex-grow container mx-auto px-4 py-10 flex flex-col items-center">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-2xl">
            <h1 className="text-3xl font-bold mb-6 text-center">Ajuda</h1>
            <div className="space-y-4">
              <section>
                <h2 className="text-2xl font-semibold mb-2">Perguntas Frequentes</h2>
                <div className="space-y-2">
                  <details>
                    <summary className="font-semibold">Como faço para criar uma conta?</summary>
                    <p>
                      Para criar uma conta, clique no botão "Cadastro" na página inicial e preencha o formulário 
                      com suas informações pessoais. Após o cadastro, você receberá um e-mail de confirmação.
                    </p>
                  </details>
                  <details>
                    <summary className="font-semibold">Esqueci minha senha. Como posso redefini-la?</summary>
                    <p>
                      Se você esqueceu sua senha, clique no link "Esqueci minha senha" na página de login. 
                      Você receberá um e-mail com instruções para redefinir sua senha.
                    </p>
                  </details>
                  <details>
                    <summary className="font-semibold">Como posso adicionar um jogo aos meus favoritos?</summary>
                    <p>
                      Para adicionar um jogo aos seus favoritos, clique no ícone de coração que aparece ao lado do jogo.
                      Você pode visualizar todos os seus jogos favoritos na seção "Favoritos" do seu perfil.
                    </p>
                  </details>
                  <details>
                    <summary className="font-semibold">Quais métodos de pagamento são aceitos?</summary>
                    <p>
                      Aceitamos diversos métodos de pagamento, incluindo cartões de crédito, débito e PayPal. 
                      Para mais detalhes, visite a seção de pagamentos na finalização da compra.
                    </p>
                  </details>
                  <details>
                    <summary className="font-semibold">Como posso acompanhar meu pedido?</summary>
                    <p>
                      Para acompanhar o status do seu pedido, acesse a seção "Meus Pedidos" no seu perfil. 
                      Lá você encontrará informações detalhadas sobre o status e a entrega do seu pedido.
                    </p>
                  </details>
                </div>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-2">Contato</h2>
                <p>
                  Caso sua dúvida não esteja listada acima, entre em contato conosco através dos seguintes meios:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>WhatsApp: +55 11 91234-5678</li> {/* Número fictício */}
                  <li>Email: suporte@retrozone.com.br</li>
                </ul>
                <p>
                  Estamos disponíveis para ajudá-lo de segunda a sexta-feira, das 9h às 18h.
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

export default Ajuda;
