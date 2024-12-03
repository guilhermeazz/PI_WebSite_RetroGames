import React from 'react';
import { useNavigate } from 'react-router-dom';

// Imagens das plataformas
import ps1 from '../assets/plataforma/ps1.png';
import ps2 from '../assets/plataforma/ps2.png';
import gamecube from '../assets/plataforma/gamecube.jpg';
import snes from '../assets/plataforma/snes.png';
import atari from '../assets/plataforma/atari.webp';

// Imagens das categorias
import acao from '../assets/categorias/acao.png';
import aventura from '../assets/categorias/aventura.png';
import corrida from '../assets/categorias/corrida.png';
import puzzle from '../assets/categorias/puzzle.png';

const Categorias = () => {
    const navigate = useNavigate();

    const handlePlataformaClick = (plataforma) => {
        console.log(`Plataforma clicada: ${plataforma}`); // Adicionando log para depuração
        navigate(`/jogos/plataforma/${plataforma}`);
    };

    const handleCategoriaClick = (categoria) => {
        console.log(`Categoria clicada: ${categoria}`); // Adicionando log para depuração
        navigate(`/jogos/categoria/${categoria}`);
    };

    return (
        <div className="w-full py-10 flex flex-col items-center space-y-10">
            <div className="w-3/4">
                <h2 className="text-2xl font-bold mb-4">Plataformas</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    <div className="w-full h-32 bg-cover rounded-lg cursor-pointer" style={{ backgroundImage: `url(${ps1})` }} onClick={() => handlePlataformaClick('PlayStation 1')} />
                    <div className="w-full h-32 bg-cover rounded-lg cursor-pointer" style={{ backgroundImage: `url(${ps2})` }} onClick={() => handlePlataformaClick('PlayStation 2')} />
                    <div className="w-full h-32 bg-cover rounded-lg cursor-pointer" style={{ backgroundImage: `url(${gamecube})` }} onClick={() => handlePlataformaClick('GameCube')} />
                    <div className="w-full h-32 bg-cover rounded-lg cursor-pointer" style={{ backgroundImage: `url(${snes})` }} onClick={() => handlePlataformaClick('Super Nintendo')} />
                    <div className="w-full h-32 bg-cover rounded-lg cursor-pointer" style={{ backgroundImage: `url(${atari})` }} onClick={() => handlePlataformaClick('Atari')} />
                </div>
            </div>
            <div className="w-3/4">
                <h2 className="text-2xl font-bold mb-4">Categorias de Jogos</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="relative w-full h-32 bg-cover rounded-lg cursor-pointer" style={{ backgroundImage: `url(${acao})` }} onClick={() => handleCategoriaClick('Ação')}>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span className="text-white text-lg font-bold">Ação</span>
                        </div>
                    </div>
                    <div className="relative w-full h-32 bg-cover rounded-lg cursor-pointer" style={{ backgroundImage: `url(${aventura})` }} onClick={() => handleCategoriaClick('Aventura')}>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span className="text-white text-lg font-bold">Aventura</span>
                        </div>
                    </div>
                    <div className="relative w-full h-32 bg-cover rounded-lg cursor-pointer" style={{ backgroundImage: `url(${corrida})` }} onClick={() => handleCategoriaClick('Corrida')}>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span className="text-white text-lg font-bold">Corrida</span>
                        </div>
                    </div>
                    <div className="relative w-full h-32 bg-cover rounded-lg cursor-pointer" style={{ backgroundImage: `url(${puzzle})` }} onClick={() => handleCategoriaClick('Puzzle')}>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span className="text-white text-lg font-bold">Puzzle</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categorias;
