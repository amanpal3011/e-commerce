
import './App.css';
import Navigation from './customer/component/Navigation/Navigation';

import Footer from './customer/component/Footer/Footer';
import Product from './customer/component/Product/Product';
import ProductDetails from './customer/component/ProductDetails/ProductDetails';
import Cart from './customer/component/Cart/Cart';
import CheckOut from './customer/component/CheckOut/CheckOut';
import Order from './customer/component/Order/Order';
import OrderDetails from './customer/component/Order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRoutes from './Routers/CustomerRoutes';

function App() {
  return (
    <div className="">
      <Routes>
        <Route  path='/*' element={<CustomerRoutes/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
