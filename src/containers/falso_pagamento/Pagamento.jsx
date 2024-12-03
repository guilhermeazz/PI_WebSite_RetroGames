import React from 'react';
import { useLocation } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';

const Pagamento = () => {
  const location = useLocation();
  const { total, carrinho } = location.state || { total: 0, carrinho: [] };

  // Gera a mensagem com a lista de produtos para enviar pelo WhatsApp
  const generateWhatsAppMessage = () => {
    let message = "Olá, gostaria de comprar os seguintes produtos:\n\n";
    carrinho.forEach((item) => {
      message += `${item.nome} - R$ ${item.valor.toFixed(2)} x ${item.quantidade}\n`;
    });
    message += `\nTotal: R$ ${total.toFixed(2)}`;
    return message;
  };

  const whatsappNumber = '+5515996607444'; // Substitua pelo seu número de WhatsApp
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(generateWhatsAppMessage())}`;

  return (
    <div className='flex flex-col gap-4' style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Pagamento</h1>
      <h2>Total da Compra: R$ {total.toFixed(2)}</h2>

      <p>Escaneie o QR Code abaixo para enviar os detalhes para o WhatsApp:</p>
      
      <div className="flex justify-center">
        <QRCodeSVG value={whatsappLink} size={256} />
      </div>

      <p>Ou clique abaixo para enviar via WhatsApp:</p>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <button className="bg-green-600 text-white p-4 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
          Enviar para o WhatsApp
        </button>
      </a>
    </div>
  );
};

export default Pagamento;

