import React from 'react';
import { Carrito } from '../Carrito/Carrito';

const navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                <div className="container">
                    <a href='/'><img src='./LogoLaTronera.png' width='150' alt='La Tronera' /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto menu">
                            <li className="nav-item">
                                <a className="nav-link" href='/'>Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='/menu'>Pizzas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='/menu'>Empanadas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='/menu'>Bebidas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='/menu'>Promciones</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='/contacto'>Contacto</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Carrito/>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default navbar;