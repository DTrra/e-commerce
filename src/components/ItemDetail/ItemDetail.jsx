import Counter from '../Counter/ItemCount';
import Card from 'react-bootstrap/Card'

const ItemDetail = ({ product }) => {

    return (
<div className="container">
    <div className='row justify-content-center'>
    <Card border="danger shadow " style={{ width: '28rem', marginTop: '30px', marginButton: '30px' }}>
    <Card.Header className='shadow text-center'><img src={product?.img} width="400px" alt='imagen'/></Card.Header>
    <Card.Body>
        <Card.Title>
            {product?.name}
        </Card.Title>
            <Card.Text>
                Categoria: {product?.category}
            </Card.Text>
            <Card.Text >
                Descripcion: {product?.description}
            </Card.Text>
            <Card.Title >
                Precio: ${product?.price}
            </Card.Title>
        <Counter className='justify-content-center' />
    </Card.Body>
    </Card>
    </div>
</div> 

    )
}
export default ItemDetail;