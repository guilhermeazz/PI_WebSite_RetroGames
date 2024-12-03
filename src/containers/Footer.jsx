const Footer = () => {
    return (
        <div>
            <div className='bg-red-900 h-4'></div>

            <footer>
                <div className='flex bg-gray-900 text-white py-12 justify-around'>
                    <div className='flex flex-col gap-2'>
                        <div>
                            <h1>Contato</h1>
                        </div>

                        <div>
                            <ul>
                                <li>Email: Alanfelix@gmail.com</li>
                                <li>Endereço: Av de Marcondes N:1200 </li>
                                <li>Telefone: (81) 99662-3496 </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;