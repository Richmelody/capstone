// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Reservation from "./pages/Reservation";
import BookingPage from "./pages/BookingPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservations" element={<Reservation />} />
        <Route path="/BookingPage" element={<BookingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
