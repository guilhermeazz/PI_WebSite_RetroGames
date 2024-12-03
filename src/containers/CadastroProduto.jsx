import React, { useState } from 'react';  

const CadastroProduto = () => {  
    const [produto, setProduto] = useState({  
        nome: '',  
        descricao: '',  
        preco: '',  
        categoria: '',  
        imagem: null  
    });  

    const handleChange = (e) => {  
        const { name, value } = e.target;  
        setProduto({ ...produto, [name]: value });  
    };  

    const handleImageChange = (e) => {  
        setProduto({ ...produto, imagem: e.target.files[0] });  
    };  

    const handleSubmit = (e) => {  
        e.preventDefault();  
        // Aqui você pode implementar a lógica para enviar os dados do produto para um servidor  
        console.log(produto);  
        // Resetar o formulário, se necessário  
        setProduto({  
            nome: '',  
            descricao: '',  
            preco: '',  
            categoria: '',  
            imagem: null  
        });  
    };  

    return (  
        <div className="container mx-auto p-4">  
            <h1 className="text-2xl font-bold mb-4">Cadastro de Produto</h1>  
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">  
                <div className="mb-4">  
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nome">Nome do Produto</label>  
                    <input  
                        type="text"  
                        name="nome"  
                        value={produto.nome}  
                        onChange={handleChange}  
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
                        required  
                    />  
                </div>  
                <div className="mb-4">  
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descricao">Descrição</label>  
                    <textarea  
                        name="descricao"  
                        value={produto.descricao}  
                        onChange={handleChange}  
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
                        required  
                    />  
                </div>  
                <div className="mb-4">  
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="preco">Preço</label>  
                    <input  
                        type="number"  
                        name="preco"  
                        value={produto.preco}  
                        onChange={handleChange}  
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
                        step="0.01"  
                        required  
                    />  
                </div>  
                <div className="mb-4">  
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoria">Categoria</label>  
                    <input  
                        type="text"  
                        name="categoria"  
                        value={produto.categoria}  
                        onChange={handleChange}  
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
                        required  
                    />  
                </div>  
                <div className="mb-4">  
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imagem">Imagem</label>  
                    <input  
                        type="file"  
                        name="imagem"  
                        onChange={handleImageChange}  
                        className="block w-full text-gray-700 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500"  
                        accept="image/*"  
                    />  
                </div>  
                <div className="flex items-center justify-between">  
                    <button  
                        type="submit"  
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"  
                    >  
                        Cadastrar Produto  
                    </button>  
                </div>  
            </form>  
        </div>  
    );  
};  

export default CadastroProduto;