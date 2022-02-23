import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { traerProductos  } from '../Products/products';

export const ItemListContainer =()=>{
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
            {
                traerProductos.map(producto=>{
                    return(
                        <ItemList key={producto.id} productoProp={producto}/>
                    )
                })
            }
    
        </>
            )}
        </>
    );

    
};

export default ItemListContainer;