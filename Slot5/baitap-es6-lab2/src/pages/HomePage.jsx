import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert';
import { ProductList, AppButton, InputField } from '../components';
import { products } from '../data/products';
import { APP_NAME } from '../data/menu';

const formatVND = (n) => n.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

const HomePage = () => {
  // Dữ liệu tính sẵn (chưa dùng hook)
  const onSale = products.filter(({ discount }) => discount > 0);
  const deals = [...onSale].sort((a, b) => b.discount - a.discount).slice(0, 4);
  const categories = [...new Set(products.map(({ category }) => category?.name ?? 'Khác'))];

  const total = products.length;
  const inStockCount = products.filter(({ inStock }) => inStock).length;
  const avgPrice = Math.round(products.reduce((sum, { price }) => sum + price, 0) / total);
  const stats = { total, inStockCount, avgPrice };

  const statCards = [
    { label: 'Tổng sản phẩm', value: stats.total },
    { label: 'Còn hàng', value: stats.inStockCount },
    { label: 'Giá trung bình', value: formatVND(stats.avgPrice) },
  ];

  return (
    <>
      {/* 1. Hero */}
      <Card className="bg-primary text-white mb-4">
        <Card.Body>
          <Card.Title as="h3">{`Chào mừng đến ${APP_NAME}`}</Card.Title>
          <Card.Text>{`Hôm nay có ${onSale.length} sản phẩm đang giảm giá`}</Card.Text>
        </Card.Body>
      </Card>

      {/* 2. Thống kê */}
      <Row className="g-3 mb-4">
        {statCards.map(({ label, value }) => (
          <Col md={4} key={label}>
            <Card className="text-center">
              <Card.Body>
                <div className="text-muted">{label}</div>
                <div className="fs-3 fw-bold">{value}</div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* 3. Bộ lọc (chỉ giao diện) */}
      <InputGroup className="mb-4">
        <Form.Control placeholder="Tìm sản phẩm..." />
        <Form.Select style={{ maxWidth: 200 }}>
          <option>Tất cả danh mục</option>
          {categories.map((name) => (
            <option key={name}>{name}</option>
          ))}
        </Form.Select>
        <AppButton>Tìm</AppButton>
      </InputGroup>

      {/* 4. Đang giảm giá */}
      <h4 className="mb-3">Đang giảm giá</h4>
      <ProductList products={deals} />

      {/* 5. Tất cả sản phẩm */}
      <h4 className="mt-5 mb-3">Tất cả sản phẩm</h4>
      {products.length === 0 ? (
        <Alert variant="info">Chưa có sản phẩm</Alert>
      ) : (
        <ProductList products={products} />
      )}

      {/* 6. Nhận tin */}
      <Card className="mt-5">
        <Card.Body>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Card.Title>Nhận tin khuyến mãi</Card.Title>
            <InputField
              id="newsletter"
              label="Email"
              type="email"
              placeholder="name@example.com"
              required
            />
            <AppButton type="submit">Đăng ký</AppButton>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default HomePage;