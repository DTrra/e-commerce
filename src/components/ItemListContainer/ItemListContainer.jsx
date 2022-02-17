import { useEffect, useState } from 'react';
import { traerProductos } from '../../mock/products';
import ItemList from '../ItemList';


const ItemListContainer = ({ saludo }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        traerProductos
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);


    return (
        <>
        {loading ? (
                <div className="container text-center">
                    <img src='cargandoPizza.gif' alt='Cargando...' />
                </div>
            ) : (
        <>
            <ItemList products={products} />
        </>
            )}
        </>
    );
};

export default ItemListContainer;