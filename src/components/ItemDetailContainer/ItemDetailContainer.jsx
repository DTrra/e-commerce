import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { traerProductos  } from '../Products/products';

export const ItemDetailContainer = ()=>{

    const [products, setProducts] = useState({});
    const {id} = useParams();
    const obtenerProductoBD = (nombreProducto)=>{
        return new Promise((resolve,reject)=>{
            const arregloProductos = traerProductos;
            const productoEncontrado = arregloProductos.find((elemento)=>elemento.id === nombreProducto);
            setTimeout(() => {
                resolve(productoEncontrado)
            }, 4000);
        })
    }

    useEffect(()=>{
        const obtenerProducto = async(id)=>{
            const responsePromise = await obtenerProductoBD(id);
            setProducts(responsePromise)
        }
        obtenerProducto(id);
    },[id])

    console.log('parametro recibido', id)
    console.log('producto', products)

    return(
        <>
        <h2>DETALLE DEL MENU SELECCIONADO: {products.name}</h2>
        <p>Descripcion: {products.description}</p>
        <p>Precio: {products.price}</p>
        </>

    )
}