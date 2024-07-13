import { Image } from "@chakra-ui/react";
import BuscarDigimon from "./BuscarDigimon";
import '../style/Header.css'

const Header = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <a href='http://localhost:3000/'><Image src='https://i.pinimg.com/originals/07/b8/6e/07b86ec40ea5ca30f383e492a2ad52ed.png' alt='logo Digimon'></Image></a>
            </div>
            <div className="busca">
                <BuscarDigimon />
            </div>
            <div className='links'>
                <a className='espacamentoLinks'>Nomes</a>
                <a className='espacamentoLinks'>Imagens</a>
                <a className='espacamentoLinks'>Evoluções</a>
                <a className='espacamentoLinks'>Cards</a>
            </div>
        </header>
    );
}

export default Header;