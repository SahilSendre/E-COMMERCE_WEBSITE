import './App.css';
import CartList from './components/CartList';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import ProductList from './components/ProductList';
import { useEffect , useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import { Pagenation } from './components/Pagenation';
import DetailProduct from './components/DetailProduct';
import PaymentDetails from './components/PaymentDetails';
function App() {

  const [product, setProduct] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  const [PostsPerPage,setPostsPerPage] = useState(6);

 
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((result) => {
      result.json().then((resp) => {
        // console.warn("result",resp)
        setProduct(resp);
      });
    });
  }, []);

  const [cart,setCart] = useState([])

  const [showCart,setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart , {...data, quantity : 1}]);

  }

  const handleShow = (value) => {
    setShowCart(value)
  }
  

  

  return (
        <div >
          <Header count={cart.length} handleShow={handleShow}/>

          <Routes>
              <Route path='/cart' element={<CartList cart={cart}/>}></Route>

              <Route path='/' 
              element={<>
              <ProductList product={product} addToCart={addToCart}/>
              </>}>
              </Route>

              <Route path='/login' element={<LoginForm/>}></Route>
              {/* <Route path='/detailproduct' element={<DetailProduct product={product} addToCart={addToCart }/>}></Route> */}
              <Route path='/detailProduct/:id' element={<DetailProduct product={product} addToCart={addToCart}/>} />
              <Route path='/paymentDetails' element={<PaymentDetails/>} />
          </Routes>

        </div>  
     
    );
}

export default App;


