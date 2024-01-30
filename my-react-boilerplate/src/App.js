// App.js
import React, { useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Reservation from "./pages/Reservation";
import BookingPage from "./pages/BookingPage";
import Bookingform from "./components/Bookingform";

// Reducer function
const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      // For now, return the same available times regardless of the date
      return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    default:
      return state;
  }
};

// Function to initialize times
const initializeTimes = () => [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

const App = () => {
  // Reducer hook
  const [availableTimes, dispatchTimes] = useReducer(
    timesReducer,
    [],
    initializeTimes
  );

  // Function to handle state change
  const updateTimes = (selectedDate) => {
    dispatchTimes({ type: "UPDATE_TIMES", payload: selectedDate });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage availableTimes={availableTimes} />}
        />
        <Route path="/reservations" element={<Reservation />} />
        <Route
          path="/BookingPage"
          element={
            <BookingPage>
              <Bookingform
                availableTimes={availableTimes}
                updateTimes={updateTimes}
              />
            </BookingPage>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
