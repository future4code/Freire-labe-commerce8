import React from 'react';
import logotipo1 from '../Components/Img/logotipo1.png';
import carrinho1 from '../img/carrinho1.png';

class Header extends React.Component {
    render() {
        return (

    <body>
        <div className="header">
            <button className="btn_icon_header">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-list" viewBox="0 0 25 25">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </button>
            <div className="logo_header">
                <img className="img_logo" src="./img/logotipo1.png" alt="Logo Shirts"/>
            </div>
            <div className="navigation_header">
                <button className="btn_icon_header">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-x" viewBox="0 0 25 25">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>
                <a href="#">Home</a>
                <a href="#">Contato</a>
                <img className="img_carrinho" src="./img/carrinho1.png" alt="Icone Carrinho de compras"/>
            </div>
        </div>
    </body>
        )
    }
}

export default Header;