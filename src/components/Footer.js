import React from 'react';
import '../style/Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footerContainer'>
                <div>
                    <p className='footer-text'>Redes sociais</p>
                    <div className='iconsGit'>
                        <a href="https://github.com/GuAparecido" target="_blank">
                            <img src="https://cdn-icons-png.freepik.com/256/2111/2111432.png?ga=GA1.1.1785861332.1720900805&semt=ais_hybrid" alt="GitHub"></img>
                        </a>
                    </div>
                    <div className='icons'>
                        <a href="https://www.linkedin.com/in/gustavo-aparecido-5b75741b4/" target="_blank">
                            <img src='https://cdn-icons-png.freepik.com/256/1384/1384014.png?ga=GA1.1.1785861332.1720900805&semt=ais_hybrid' alt="LinkedIn"></img>
                        </a>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <p className='footer-text'>Desenvolvido por Gustavo Aparecido</p>
                    <p className='footer-text'>Copyright © 2024</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
