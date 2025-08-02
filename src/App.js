import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shopify from './Shopify'; 
import Navbar from './Navbar'; 
import Products from './Products'; 
import Categories from './Categories'; 
import Login from './Login'; // Ensure this file exists and is correctly named
import Cart from './Cart'; 
import Moon from './Moon';
import Beauty1 from './Beauty1';
import Footer from './Footer';
import ProductDetails from './ProductDetails';


function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path='/' element={<Shopify />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/Categories' element={<Categories />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Moon' element={<Moon />} />
        <Route path='/Beauty1' element={<Beauty1/>}/>
        <Route path='/productDetails/:category/:id' element={<ProductDetails/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
