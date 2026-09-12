import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import { UserProvider } from './components/UserContext';


import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import WhereHumyIs from './components/WhereHumyIs';
import BlogPage from './components/BlogPage';
import ContactUs from './components/ContactUs';
import TermsConditions from './components/TermsConditions';
import Faq from './components/Faq';
import BecomeDriver from './components/BecomeDriver';
import BecomePayoneer from './components/BecomePayoneer'; 
import OrderPage from './components/OrderPage';
import Login from './components/Login';
import NewUser from './components/NewUser';
import Kitchens from './components/Kitchens'; 
import ItalianKitchen from './components/ItalianKitchen';
import SyrianKitchen from './components/SyrianKitchen';
import JapaneseKitchen from './components/JapaneseKitchen';
import TurkishKitchen from './components/TurkishKitchen';  
import ChineseKitchen from './components/ChineseKitchen';
import Checkout from './components/Checkout';
import ForgetPassword from './components/ForgetPassword';
import EmailAndPassword from './components/EmailAndPassword';
import MyOrders from './components/MyOrders';


import './App.css';

function App() {

  return (
    <Router>
      <UserProvider>
        <CartProvider>
          <div className="App">
            <Routes>
              <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/where-humy-is" element={<WhereHumyIs />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/new-user" element={<NewUser />} />
            <Route path="/kitchens" element={<Kitchens />} /> 
            <Route path="/italianKitchen" element={<ItalianKitchen />} />
            <Route path="/syrianKitchen" element={<SyrianKitchen />} />
            <Route path="/japaneseKitchen" element={<JapaneseKitchen />} />
            <Route path="/turkishKitchen" element={<TurkishKitchen />} />
            <Route path="/chineseKitchen" element={<ChineseKitchen />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/email-password" element={<EmailAndPassword />} />
            <Route path="/my-orders" element={<MyOrders />} />


            
            <Route path="/become-payoneer" element={
              <>
                <HomePage />
                <BecomePayoneer />
              </>
            } />
            
            <Route path="/become-driver" element={
              <>
                <HomePage />
                <BecomeDriver />
              </>
            } />
            </Routes>
          </div>
        </CartProvider>
      </UserProvider>
    </Router>
  );
}

export default App;