import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ItemDetail = ({ product }) => {

    return (
        <div className="container">
            <div className="row">
                <Card className="shadow" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} width="200px" alt={name} />
                    <Card.Body>
                        <Card.Title>{product?.name}</Card.Title>
                        <Card.Text>
                            {product?.description}
                            {product?.id}
                        </Card.Text>                       
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}
export default Item;