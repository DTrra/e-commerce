import Item from '../Item/Item';


const ItemList = ({ products }) => {
    return (
        <div className="container">
            <div className='row'>
                <div className='d-flex col-md-3'>
                {products.map((product) =>
                        <Item product={product} key={product.id} />
                    )}
                    
                </div>
            </div>
        </div>
    )
}
export default ItemList; 