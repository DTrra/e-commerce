import React, { useState } from 'react';
import Counter from '../Counter/ItemCount';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../Counter/ItemCount';

const ItemDetail = ({ product }) => {

    const [qty, setQty] = useState(0);
    const onAdd = (cantidad) => {
        setQty(cantidad);
    };

    return (
    <div className="container">
        <div className='row justify-content-center'>
        <Card border="danger shadow " style={{ width: '28rem', marginTop: '30px', marginBottom: '40px' }}>
        <Card.Header className='shadow text-center'><img src={product?.img} width="400px" alt='imagen'/></Card.Header>
        <Card.Body>
            <Card.Title>
                {product?.name}
            </Card.Title>
                <Card.Text>
                    Categoria: {product?.category}
                </Card.Text>
                <Card.Text >
                    Descripcion: {product?.description}
                </Card.Text>
                <Card.Title >
                    Precio: ${product?.price}
                </Card.Title>
                {qty === 0 ? (
                    <Counter stock={product?.stock} onAdd={onAdd} className='justify-content-center' />
                ) : (
                    <>
                    <p>Enviaste <strong>{qty} {product?.category} {product?.name}</strong> al repartidor, ¿que deseas hacer? </p>
                        <Link to="/cart" className="d-grid gap-2">
                            <Button className='btnBuy' variant="danger" size="lg"> Ir con el repartidor </Button>
                        </Link>
                        <br/>
                        <Link to="/" className="d-grid gap-2">
                            <Button className='btnBuy' variant="secondary" size="lg"> Seguir Comprando </Button>
                        </Link>
                    </>
                )}
                
        </Card.Body>
        </Card>
        </div>
    </div> 
    )
}
export default ItemDetail;