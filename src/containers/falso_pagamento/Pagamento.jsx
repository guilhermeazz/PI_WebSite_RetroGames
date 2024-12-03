import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

const Pagamento = () => {
  const [products] = useState([
    { name: "Produto 1", price: 50 },
    { name: "Produto 2", price: 30 },
    { name: "Produto 3", price: 20 },
  ]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isPaid, setIsPaid] = useState(false);

  const handleAddToCart = (product) => {
    setSelectedProducts((prev) => [...prev, product]);
  };

  const handleRemoveFromCart = (product) => {
    setSelectedProducts((prev) => prev.filter((p) => p.name !== product.name));
  };

  const handleConfirmPayment = () => {
    setIsPaid(true); // Marca o pagamento como confirmado
  };

  // Gera a mensagem com a lista de produtos para enviar pelo WhatsApp
  const generateWhatsAppMessage = () => {
    let message = "Olá, gostaria de comprar os seguintes produtos:\n\n";
    selectedProducts.forEach((product) => {
      message += `${product.name} - R$ ${product.price}\n`;
    });
    message += `\nTotal: R$ ${selectedProducts.reduce((acc, product) => acc + product.price, 0)}`;
    return message;
  };

  const whatsappNumber = '+5515996607444'; // Substitua SEUNUMERO pelo seu número de WhatsApp
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(generateWhatsAppMessage())}`;

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Selecione seus produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.name}>
            <p>{product.name} - R$ {product.price}</p>
            <button onClick={() => handleAddToCart(product)}>
              Adicionar ao carrinho
            </button>
          </li>
        ))}
      </ul>

      <h2>Carrinho:</h2>
      <ul>
        {selectedProducts.map((product) => (
          <li key={product.name}>
            <p>{product.name} - R$ {product.price}</p>
            <button onClick={() => handleRemoveFromCart(product)}>Remover</button>
          </li>
        ))}
      </ul>

      <h2>Total: R$ {selectedProducts.reduce((acc, product) => acc + product.price, 0)}</h2>

      <button onClick={handleConfirmPayment} disabled={selectedProducts.length === 0}>
        Confirmar Pagamento
      </button>

      {isPaid && (
        <div>
          <h3>Pagamento Confirmado!</h3>
          <p>Escaneie o QR Code abaixo para enviar a lista de produtos pelo WhatsApp:</p>
          <QRCodeSVG value={whatsappLink} size={256} />
        </div>
      )}
    </div>
  );
};

export default Pagamento;
