import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopHeader from './components/TopHeader';
import MainHeader from './components/MainHeader';
import Footer from './components/Footer';
// import HomePage from './screens/HomePage';
import AboutPage from './screens/AboutUs';
import ContactPage from './screens/DeliveryPayment';

function App() {
  return (
    <Router>
      <TopHeader />
      <MainHeader />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
