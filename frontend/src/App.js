import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./component/layout/header/Header"
import Home from "./component/Home/Home";
import Contact from "./component/layout/contact/Contact.js";
import About from './component/layout/about/About.js';
// import WebFont from "@types/webfontloader";
import Footer from './component/layout/footer/Footer';
import ProductDetails from './component/Product/ProductDetails';
import Products from './component/Product/Products';
import Search from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp.js";
import Profile from "./component/User/Profile.js";
import UpdateProfile from './component/User/UpdateProfile.js';
import ElementsLayout from "./component/Route/ElementLayout.js"
import UpdatePassword from "./component/User/UpdatePassword.js";
import store from "./store.js";
import { loadUser } from './actions/userAction.js';
import UserOptions from "./component/layout/header/UserOptions.js";
import { useSelector } from "react-redux";
import Cart from './component/Cart/Cart.js'; 
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import axios from "axios";
import Payment from "./component/Cart/Payment.js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess.js";
import MyOrders from "./component/Order/MyOrders.js";
import OrderDetails from "./component/Order/OrderDetails.js";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from './component/Admin/ProductList.js';
import NewProduct from './component/Admin/NewProduct.js';
import UpdateProduct from './component/Admin/UpdateProduct.js';
import OrderList from './component/Admin/OrderList.js';
import ProcessOrder from './component/Admin/ProcessOrder.js';
import UserList from './component/Admin/UserList.js';
import UpdateUser from './component/Admin/UpdateUser.js';
import ProductReviews from './component/Admin/ProductReviews.js';




function App() {
  
  const { isAuth, user, loading, isAdmin } = useSelector((state) => state.user);
  

  const [stripeApiKey, setStripeApiKey] = useState(process.env.STRIPE_API_KEY);
  async function getStripeApiKey() {
    const { data } = await axios.get(`/api/v1/stripeapikey`);

    setStripeApiKey(data.stripeApiKey);
  }
    useEffect(() => {
        // WebFont.load({
        //     google: {
        //         families: ["Roboto", "Droid Sans", "Chilanka"]
        //     },
        // });

        store.dispatch(loadUser());
        getStripeApiKey();

    }, []);

    //  window.addEventListener("contextmenu", (e) => e.preventDefault());

    if (loading) {
        return null; 
      }

    return (
        <Router>
            <Header />
            {isAuth && <UserOptions user={user} />}
            
            <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/product/:id" element={<ProductDetails />} />
    <Route exact path="/products" element={<Products />} />
    <Route exact path='/contact' element={<Contact/>}/>
    <Route exact path='/about' element={<About/>}/>
    <Route path="/products/:keyword" element={<Products />} />
    <Route exact path="/search" element={<Search />} />
    <Route exact path="/login" element={<LoginSignUp />} />
    {!isAuth ? (<Route path="/account" element={<Navigate to="/login" />} />) : 
    (<Route path="/account" element={<Profile />} />)}
    {!isAuth ? (<Route path="/password/update" element={<Navigate to="/login" />} />) : 
    (<Route path="/password/update" element={<UpdatePassword />} />)}
    {!isAuth ? (<Route path='/me/update' element={<Navigate to="/login" />} />) : 
    (<Route path='/me/update' element={<UpdateProfile />} />)}
    <Route exact path="/cart" element={<Cart />} />
    {!isAuth ? (<Route path="/shipping" element={<Navigate to="/login" />} />) : 
    (<Route path="/shipping" element={<Shipping />} />)}
    {!isAuth ? (<Route path="/order/confirm" element={<Navigate to="/login" />} />) : 
    (<Route path="/order/confirm" element={<ConfirmOrder />} />)}
    {stripeApiKey && (
            <Route
              element={<ElementsLayout stripe={loadStripe(stripeApiKey)} />}
            >
              <Route path="/process/payment" element={<Payment />} />
            </Route>
          )}
    {!isAuth ? (<Route path="/success" element={<Navigate to="/login" />} />) : 
    (<Route path="/success" element={<OrderSuccess />} />)}      
    {!isAuth ? (<Route path="/orders" element={<Navigate to="/login" />} />) : 
    (<Route path="/orders" element={<MyOrders />} />)} 
    {!isAuth ? (<Route path="/order/:id" element={<Navigate to="/login" />} />) : 
    (<Route path="/order/:id" element={<OrderDetails />} />)}
    {!isAuth && !isAdmin ? (<Route path="/admin/dashboard" element={<Navigate to="/login" />} />) : 
    (<Route path="/admin/dashboard" element={<Dashboard />} />)}
    {!isAuth && !isAdmin ? (<Route path="/admin/products" element={<Navigate to="/login" />} />) : 
    (<Route path="/admin/products" element={<ProductList />} />)} 
    {!isAuth && !isAdmin ? (<Route path="/admin/products/new" element={<Navigate to="/login" />} />) : 
    (<Route path="/admin/products/new" element={<NewProduct />} />)} 
    {!isAuth && !isAdmin ? (<Route path="/admin/product/:id" element={<Navigate to="/login" />} />) : 
    (<Route path="/admin/product/:id" element={<UpdateProduct />} />)} 
    {!isAuth && !isAdmin ? (<Route path="/admin/orders" element={<Navigate to="/login" />} />) : 
    (<Route path="/admin/orders" element={<OrderList />} />)} 
    {!isAuth && !isAdmin ? (<Route path="/admin/order/:id" element={<Navigate to="/login" />} />) : 
    (<Route path="/admin/order/:id" element={<ProcessOrder />} />)}
    {!isAuth && !isAdmin ? (<Route path="/admin/users" element={<Navigate to="/login" />} />) : 
    (<Route path="/admin/users" element={<UserList />} />)}
    {!isAuth && !isAdmin ? (<Route path="/admin/user/:id" element={<Navigate to="/login" />} />) : 
    (<Route path="/admin/user/:id" element={<UpdateUser />} />)}
    {!isAuth && !isAdmin ? (<Route path="/admin/reviews" element={<Navigate to="/login" />} />) : 
    (<Route path="/admin/reviews" element={<ProductReviews />} />)}
     {/* <Route
          component={
            window.location.pathname === "/process/payment" ? null : NotFound
          }
        /> */}
           </Routes>
            <Footer />
        </Router>
    );
}

export default App;
