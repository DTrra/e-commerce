import React from 'react'
import { useEffect, useState } from 'react';
import { getCategories } from '../Products/products'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams()

    
    useEffect(() => {
        getCategories(categoryId).then(item => {
            setProducts(item)
        }).catch(err  => {
            console.log(err)
        })
        .finally(() => {
            setLoading(false);
        });

        
    }, [categoryId])
    
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
    
}
export default ItemListContainer