import { Link } from 'react-router-dom';
import Item from '../Item/Item';

export const ItemList = ({productoProp})=>{
    console.log('poductoPorp',productoProp)
    return (
        <div className='container' style={{display: 'flex',justifyContent: 'center',alignItems: 'center', width: 200, height: 200}}>
            <img src={productoProp.img} width="200px" alt={""}/>
            <h3>{productoProp.name}</h3>
            <h3>{productoProp.description}</h3>
            <h3>{productoProp.price}</h3>
            <Link to={`/CartaDePedidos/${productoProp.id}`}>
            <button>Comprar +</button>
            </Link>
            
        </div>
    );
};

export default ItemList;