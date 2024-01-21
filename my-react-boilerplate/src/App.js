// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Reservation from "./pages/Reservation";
import BookingPage from "./pages/BookingPage";
// import MenuPage from "./pages/MenuPage";
// import OrderOnlinePage from "./pages/OrderOnlinePage";
// import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservations" element={<Reservation />} />
        <Route path="/BookingPage" element={<BookingPage />} />
        {/* <Route path="/menu" element={<MenuPage />} /> */}
        {/* <Route path="/order-online" element={<OrderOnlinePage />} /> */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* Add routes for other pages */}
      </Routes>
    </Router>
  );
};

export default App;
