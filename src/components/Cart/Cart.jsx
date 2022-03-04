import React, { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';

const Cart = () => {
    const { cart } = useContext(CartContext);

    return (
        <>
        <h4 className="container text-center">Repartidor</h4>
            {cart.map((prod) => (
                <li className="container text-center" key={prod.id}>{prod.cantidad} {prod.category} {prod.name} ${prod.price}</li>
            ))}
        </>
    );
};

export default Cart;