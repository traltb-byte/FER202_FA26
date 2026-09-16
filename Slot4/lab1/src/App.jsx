import ProductInfo from './ProductInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  

  return (
    <>
      <ProductInfo 
        name="Product 1"
        price={19.99}
        tag="New"
        avatar="images/1.jpg"
      />
      <ProductInfo 
        name="Product 2"
        price={29.99}
        tag="Sale"
        avatar="images/2.jpg"
      />
     
    </>
  )
}

export default App
