import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navigation from '../customer/component/Navigation/Navigation';
import Footer from '../customer/component/Footer/Footer';
import Cart from '../customer/component/Cart/Cart';
import Product from '../customer/component/Product/Product';
import HomePage from '../customer/pages/HomePage/HomePage'
import OrderDetails from '../customer/component/Order/OrderDetails';

import ProductDetail from '../customer/component/ProductDetails/ProductDetails';
import CheckOut from '../customer/component/CheckOut/CheckOut';
import Order from '../customer/component/Order/Order';

const CustomerRoutes = () => {
  return (
    <div>
        <div>
            <Navigation/>
        </div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product/>}></Route>
        <Route path='/product/:productId' element={<ProductDetail/>}></Route>
        <Route path='/checkOut' element={<CheckOut/>}></Route>
        <Route path='/account/order' element={<Order/>}></Route>
        <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>

      </Routes>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default CustomerRoutes;
