import Item from './Item';


const ItemList = ({ products }) => {
    return (
        <div className='container'     
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {products.map((product) => (
                <Item {...product} key={product.id} />              
            ))}
        </div>
    );
};

export default ItemList;