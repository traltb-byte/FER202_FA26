import {Card, Badge} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
const formatVND = (n) =>
  n?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) ?? 'Liên hệ';

const ProductCard = ({ product }) => {
  const {
    name = 'Sản phẩm chưa đặt tên',
    price,
    image,
    rating,
    category,
    inStock,
    discount = 0,
  } = product;
  const imageSrc = image ?? 'https://placehold.co/300x200?text=No+Image';
  const categoryName = category?.name ?? 'Chưa phân loại';
  const finalPrice = price != null ? price * (1 - discount / 100) : undefined;

  return (
    <Card className={`h-100 position-relative ${inStock ? '' : 'opacity-50'}`}>
      {discount > 0 && (
        <Badge bg="danger" className="position-absolute top-0 end-0 m-2">
          -{discount}%
        </Badge>
      )}
      <Card.Img variant="top" src={imageSrc} alt={name} />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex flex-wrap gap-1 mb-2">
          <Badge bg="info">{categoryName}</Badge>
          {inStock ? <Badge bg="success">Còn hàng</Badge> : <Badge bg="secondary">Hết hàng</Badge>}
          {rating?.rate >= 4.5 && (
            <Badge bg="warning" text="dark">Bán chạy</Badge>
          )}
        </div>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {discount > 0 ? (
            <>
              <del className="text-muted me-2">{formatVND(price)}</del>
              <strong className="text-danger">{formatVND(finalPrice)}</strong>
            </>
          ) : (
            <strong>{formatVND(price)}</strong>
          )}
          <br />
          Đánh giá: {rating?.rate ?? 'Chưa có'} ({rating?.count ?? 0} lượt)
        </Card.Text>
        <Button variant="primary" className="mt-auto" disabled={!inStock}>
          {inStock ? 'Thêm vào giỏ' : 'Không khả dụng'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;