import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"
import Products from '../Products/products'

const Item = ({ img, name, description }) => {

    return (
        <div className="container">
            <div className="row">
                <Card className="shadow" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} width="200px" alt={name} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Link to={'./${products.id}'}>
                        <Button variant="danger">Pedir +</Button>
                    </Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );

}
export default Item;