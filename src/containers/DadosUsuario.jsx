import React, { useEffect, useState } from 'react';  
import Inputslc from '../components/Inputslc'; // Importando o componente de entrada  

const DadosUsuarios = () => {  
  const [usuario, setUsuario] = useState({  
    nomeCompleto: '',  
    cpf: '',  
    cep: '',  
    email: '',  
    nomeDaRua: '',  
    numeroDaCasa: '',  
    senha: '',  
  });  

  useEffect(() => {  
    // Função para buscar os dados do usuário  
    const fetchUsuario = async () => {  
      try {  
        const response = await fetch('URL_DO_SEU_BACKEND'); // Substitua pela URL do seu backend  
        if (!response.ok) {  
          throw new Error('Erro ao buscar os dados do usuário');  
        }  
        const data = await response.json();  
        setUsuario(data);  
      } catch (error) {  
        console.error('Erro:', error);  
      }  
    };  

    fetchUsuario(); // Chama a função ao montar o componente  
  }, []);  

  const handleChange = (e) => {  
    const { name, value } = e.target;  
    setUsuario({  
      ...usuario,  
      [name]: value,  
    });  
  };  

  const handleSubmit = async (e) => {  
    e.preventDefault();  
    try {  
      const response = await fetch('URL_DO_SEU_BACKEND', { // Substitua pela URL do seu backend  
        method: 'POST', // ou 'PUT', dependendo da sua implementação  
        headers: {  
          'Content-Type': 'application/json',  
        },  
        body: JSON.stringify(usuario),  
      });  
      if (!response.ok) {  
        throw new Error('Erro ao salvar os dados');  
      }  
      const result = await response.json();  
      console.log('Dados salvos:', result);  
      // Você pode adicionar um feedback para o usuário aqui  
    } catch (err) {  
      console.error(err);  
    }  
  };  

  // Mapeamento de labels  
  const labels = {  
    nomeCompleto: 'Nome',  
    cpf: 'CPF',  
    cep: 'CEP',  
    email: 'E-mail',  
    nomeDaRua: 'Nome da Rua',  
    numeroDaCasa: 'Número da Casa',  
    senha: 'Senha',  
  };  

  // Lista de campos obrigatórios (exemplo: apenas email é obrigatório)  
  const camposObrigatorios = ['email', 'cpf']; // adicione os campos que você quer que sejam obrigatórios  

  return (  
    <div className='flex'>  
      <div className='w-full'>  
        <div className='flex flex-col gap-4'>  
          <div className='text-center'>  
            <h1 className='font-bold text-xl'>Meus dados</h1>  
          </div>  

          <div>  
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>  
              <div className='flex flex-col gap-2'>  
                {/* Renderiza os campos do formulário conforme o estado do usuário */}  
                {Object.entries(usuario).map(([key, value]) => (  
                  <Inputslc  
                    key={key}  
                    texto={labels[key] || key.replace(/([A-Z])/g, ' \$1').trim()} // Usando o mapeamento de labels  
                    placeholder={`Digite seu ${labels[key] || key.replace(/([A-Z])/g, ' \$1').trim()}`}  
                    type={key === 'senha' ? 'password' : 'text'}  
                    id={key}  
                    name={key} // Certifique-se de adicionar o nome para o controle do handleChange  
                    value={value} // Certifique-se de controlar o valor do input  
                    onChange={handleChange}  
                    required={camposObrigatorios.includes(key)} // Define como obrigatório baseado na lista  
                  />  
                ))}  
              </div>  
              <div className='mt-4 text-center'>  
                <button  
                  type="submit"  
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"  
                >  
                  Salvar alterações  
                </button>  
              </div>  
            </form>  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default DadosUsuarios;