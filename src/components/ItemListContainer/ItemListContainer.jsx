import React from 'react'
import { useEffect, useState } from 'react';
// import { getCategories } from '../Products/products'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../services/firebase';

const ItemListContainer = () => {

    const [product, setProducts] = useState([])
    const [prodFiltrados, setprodFiltrados] = useState ([])
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams()

    const getData = async() =>{
        try { 
            const itemsCollection = collection (db,"Items")
            const col = await getDocs(itemsCollection)
            const result = col.docs.map((doc) => doc = {id:doc.id, ...doc.data()})
            setProducts(result)
            setLoading(false)

        } catch (error) {
            console.warn("error",error)
        }
}

    useEffect(() => {
        getData()
        !categoryId? setprodFiltrados(product) : setprodFiltrados(product.filter(product=>product.category === categoryId))
    }, [categoryId])

console.log("product",product)

    
    return (
        <>
            {loading ? (
            <div className="container text-center">
                    <img src='cargandoPizza.gif' alt='Cargando...' />
                </div>
            ) : (
                <>
                    <ItemList products={product} />
                </>
            )}
        </>
    );   
    
}
export default ItemListContainer


  // useEffect(() => {
    //     getCategories(categoryId).then(item => {
    //         setProducts(item)
    //     }).catch(err  => {
    //         console.log(err)
    //     })
    //     .finally(() => {
    //         setLoading(false);
    //     });

        
    // }, [categoryId])