import React, { useState } from 'react';
import './ItemCount.css';

const Counter = ({ stock, initial, addToCart }) => {
    const [number, setNumber] = useState(0);
    const add = () => { 
        number < stock && setNumber(number + 1);
    };
    const substract = () => {
        number > initial && setNumber(number - 1);
    };

    return (
        <div className="container">
            <div className="container-buton">
                <div className="container-add-substract">
                <button onClick={substract}>-</button>
                <p>{number}</p>
                <button onClick={add}>+</button>
                </div>
                <div>
                    <button 
                        disabled={number === 0}
                        className={number === 0 ? 'disabled' : 'add'}
                        onClick={() => addToCart(number)}>
                        Enviar al Repartidor
                    </button>
                </div>
            </div>
        </div>

    );
}
export default Counter;