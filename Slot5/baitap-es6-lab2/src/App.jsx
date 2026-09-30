/*
import 'bootstrap/dist/css/bootstrap.min.css'
import WelcomeCard from './components/WelcomeCard';
import StudentCard from './components/StudentCard';
import { Col, Row } from 'react-bootstrap';
import ProductCard from './components/ProductCard';
import ProductList from './components/ProductList';
import { products } from './data/products';
import { Button } from 'react-bootstrap';
import CartTable from './components/CartTable';
import RegisterForm from './components/RegisterForm';

function App() {
  const student = {
    id: 1,
    name: 'John Doe',
    major: 'Computer Science',
    year: 'Senior',
    gpa: 3.8,
    avatar: 'images/nobita.jpg',
    contact: {
      email: 'johndoe@example.com',
      phone: '555-555-5555'
    }
  }; 
  const productA = {
  id: 1,
  name: 'Tai nghe Bluetooth',
  price: 590000,
  image: 'https://picsum.photos/seed/headphone/300/200',
  rating: { rate: 4.5, count: 120 },
  category: { name: 'Âm thanh' },
};
const productB = { id: 2, name: 'Chuột không dây', price: 0 }; // thiếu ảnh, rating, category
const productC = { id: 3 }; // gần như trống 

//Nâng cao: lấy danh sách danh mục không trùng bằng `const categories = ['Tất cả', ...new Set(products.map((p) => p.category.name))];` rồi `map` ra các `Button variant="outline-primary" size="sm"` (dùng chính tên danh mục làm `key`).
   const categories = ['Tất cả', ...new Set(products.map((p) => p.category.name))];
   return (
    <>
      <h2 className="text-center my-3">Bài 1 - Card chào mừng  </h2>
      <WelcomeCard />
      <h2 className="text-center my-3">Bài 2 - StudentCard (arrow function, destructuring props)  </h2>
      <div className="d-flex gap-3 flex-wrap margin-3">
        <StudentCard student={student} />
         <StudentCard student={student} />
          <StudentCard student={student} />
      </div>
      <h2 className="text-center my-3">Bài 3 - ProductCard   </h2>
      <div>
        <Row>
          <Col md={4}>
            <ProductCard product={productA} />
          </Col>
          <Col md={4}>
            <ProductCard product={productB} />
          </Col>
          <Col md={4}>
            <ProductCard product={productC} />
          </Col>
        </Row>
      </div>
      <h2 className="text-center my-3">Bài 4 - ProductList   </h2>
      <div className= "d-flex flex-wrap gap-2 mb-3">
        {categories.map((category) => (
          <Button key={category} className="outline-primary" size="sm">
            {category}
          </Button>
        ))}
      </div>
      <ProductList products={products} />
      <h2 className="text-center my-3">Bài 7 - CartTable   </h2>
      <CartTable />
       <h2 className="text-center my-3">Bài 8- RegisterForm   </h2>
       <RegisterForm />
    </>
  )
}

export default App
*/
/*Bài 9:
import { Layout, WelcomeCard, ProductList, CartTable, RegisterForm } from './components';
import { products } from './data/products';

const App = () => (
  <Layout title="Cửa hàng">
    <section id="home" className="mb-5"><WelcomeCard /></section>
    <section id="products" className="mb-5"><ProductList products={products} /></section>
    <section id="cart" className="mb-5"><CartTable /></section>
    <section id="register" className="mb-5"><RegisterForm /></section>
  </Layout>
);

export default App;
*/
import { Layout } from './components';
import HomePage from './pages/HomePage';

const App = () => (
  <Layout title="Cửa hàng mini">
    <HomePage />
  </Layout>
);

export default App;
