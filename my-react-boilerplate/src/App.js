// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Reservation from "./pages/Reservation";
import BookingPage from "./pages/BookingPage";

const App = () => {
  // State for available times
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage availableTimes={availableTimes} />}
        />
        <Route path="/reservations" element={<Reservation />} />
        <Route path="/BookingPage" element={<BookingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
