import ProductCard from './ProductCard';
import { Row, Col } from 'react-bootstrap';
import {products} from '../data/products';
function ProductList({ products }) {
   
    return (
            <div>
            <h2 className="text-muted">{`Có ${products.length} sản phẩm`}</h2>
            <Row xs={1} sm={2} lg={4} className="g-4">
                {products.map((product) => (
                    <Col key={product.id}>
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}       
export default ProductList;