import React from 'react';
import { Link } from 'react-router-dom';
import { Carrito } from '../CartWidget/Carrito';
import './EstilosNav.css';

const navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark background">
                <div className="container">
                    <a href='/'><img src='./LogoLaTronera.png' width='150' alt='La Tronera' /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto menu">
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/pizzas'>Pizzas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/empanadas'>Empanadas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/bebidas'>Bebidas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/promociones'>Promociones</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/contacto'>Contacto</Link>
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