import React from 'react';
import './NavBar.css';

function NavBar(props) {
    return (
        <div>
            <div class="menu">
                <p class="titulo">Azahara</p>

                <div><a href="index.html" class="home">Home</a></div>

                <div><a href="page/servicios.html" class="servicios">Servicios</a></div>

                <div><a href="page/nosotros.html" class="nosotros">Nosotros</a></div>

                <div><a href="page/contacto.html" class="contacto">Contacto</a></div>

                <div><a href="page/clientes.html" class="clientes">Clientes</a></div>
            </div>
        </div>
    );
}

export default NavBar;