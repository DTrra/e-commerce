import Item from '../Item/Item';
import './ItemList.css';


const ItemList = ({ products }) => {
    return (
        <div className="container">
            
                
                {products.map((product) => 

                <Item className='col-md-4' product ={ 
                    { 
                        category:product.category,
                        name:product.name,
                        img:product.img,
                        price:product.price,
                    }
                } />

                )}
                
    
        </div>
    )
}
export default ItemList; 