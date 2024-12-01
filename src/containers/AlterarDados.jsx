import React, { useState } from 'react';
import Inputslc from '../components/Inputslc';

const AlterarDados = () => {
    const [inputValue, setInputValue] = useState({
        senhaAtual: '',
        novaSenha: '',
        confirmarSenha: '',
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setInputValue(prevState => ({
            ...prevState,
            [id]: value
        }));

        if (errorMessage) {
            setErrorMessage('');
        }
    };

    const handleSaveChanges = () => {
        if (!inputValue.senhaAtual || !inputValue.novaSenha || !inputValue.confirmarSenha) {
            setErrorMessage('Todos os campos são obrigatórios!');
            return;
        }

        if (inputValue.novaSenha !== inputValue.confirmarSenha) {
            setErrorMessage('As novas senhas não coincidem.');
            return;
        }

        alert(`Senha alterada com sucesso!`);
        // Implementar chamada à API aqui
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <div className='flex'>
                <div className='w-full'>
                    <div className='flex flex-col text-center gap-4'>
                        <div>
                            <h1 className='font-bold text-xl'>Alterar Senha</h1>
                        </div>
                        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                            <div className='flex flex-col gap-2'>
                                <div>
                                    <Inputslc
                                        placeholder="Digite sua senha atual"
                                        type="password"
                                        id="senhaAtual"
                                        value={inputValue.senhaAtual}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <Inputslc
                                        placeholder="Digite sua nova senha"
                                        type="password"
                                        id="novaSenha"
                                        value={inputValue.novaSenha}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <Inputslc
                                        placeholder="Confirme sua nova senha"
                                        type="password"
                                        id="confirmarSenha"
                                        value={inputValue.confirmarSenha}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            {errorMessage && (
                                <div className="text-red-500">{errorMessage}</div>
                            )}

                            <div className='mt-4'>
                                <button
                                    type="button"
                                    onClick={handleSaveChanges}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Salvar Alterações
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AlterarDados;
