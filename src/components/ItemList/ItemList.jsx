import Item from '../Item/Item';


const ItemList = ({products}) => {
    return(
        <div className='container' style={{display: 'flex',justifyContent: 'center',alignItems: 'center', width: 400, height: 400}}>
        
        {products.map((product)=>
        <Item product={product} key={product.id}/>
    )}
    </div>
)
}
export default ItemList