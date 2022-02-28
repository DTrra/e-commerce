import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Item = ({product}) =>{
    return(
        <div className='container'>
            <Card className="shadow" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Img variant="top" src={product.img} width="200px" alt='imagen' />
                <h3>${product.price}</h3>
            <Link to={`/detail/${product.id}`}>
                <Button variant="danger">Pedir +</Button>
            </Link>
            </Card.Body>
            </Card>
        </div>
    )
}
export default Item