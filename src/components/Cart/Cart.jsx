import React, { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';

const Cart = () => {
    const { cart, clear, removeItem, item } = useContext(CartContext);


    return (
        <div className='container'>
            { cart.length > 0 ? `Productos agregados recientemente:`
                            : `El Repartido no tiene nada para enviar` 
            } 
            <div>
                {cart.map((prod) => (
                    <div  key={prod.id} className='card mb-3' style={{maxWidht: '540 px'}}>
                        <div className='row g-0'>
                        <div className='col-md-2'>
                            <img src={prod.img} className='imf-fluid rounded-start' width="200px" alt={prod.name}/>
                        </div>
                        <div className='col-md-6'>
                            <h6 className='card-title'>{prod.category} {prod.name}</h6>
                            <p> Costo unitario $ {prod.price}</p>
                            <p className='card-text'>Cantidad: {prod.cantidad}</p>
                            <p className='card-text'>Precio total ${prod.price * prod.cantidad}</p>
                        </div>   
                        <div className='col-md-2'>
                        <button className='btn btn-danger'onClick={()=>removeItem(item.id)}>Eliminar pedido</button>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
            <hr/>
            {`Total del pedido: $ ${cart.reduce((acum,item)=> acum + (item.price * item.cantidad),0)}`}
            <hr/>
            <button className='btn btn-danger' onClick={clear}>Vaciar todo el carrito</button>
        </div>
    );
};

export default Cart;