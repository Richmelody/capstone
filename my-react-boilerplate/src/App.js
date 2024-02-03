// App.js
import React, { useReducer, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Reservation from "./pages/Reservation";
import BookingPage from "./pages/BookingPage";
import SubmitPage from "./components/submitpage";
import fetchAPI from "./api/fetchdata";

// Reducer function
const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES_SUCCESS":
      return action.payload;
    case "UPDATE_TIMES_ERROR":
      console.error("Error updating times:", action.error);
      return state;
    default:
      return state;
  }
};

// Function to initialize times
const initializeTimes = () => {
  const formattedDate = new Date().toISOString();
  return fetchAPI(formattedDate);
};

const App = () => {
  const [availableTimes, dispatchTimes] = useReducer(
    timesReducer,
    initializeTimes()
  );
  const [selectedDate, setSelectedDate] = useState(() => {
    const currentDate = new Date();
    const initialDate = currentDate.toISOString().split("T")[0];
    return initialDate;
  });

  // State for submitted data
  const [submittedData, setSubmittedData] = useState([]);

  const updateTimes = async (date) => {
    try {
      const newTimes = await fetchAPI(date);
      dispatchTimes({ type: "UPDATE_TIMES_SUCCESS", payload: newTimes });
    } catch (error) {
      dispatchTimes({ type: "UPDATE_TIMES_ERROR", error });
    }
    setSelectedDate(date);
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
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              selectedDate={selectedDate}
              updateTimes={updateTimes}
              onDateChange={setSelectedDate}
              onSubmit={setSubmittedData} // Pass the callback function
            />
          }
        />
        <Route
          path="/submit"
          element={<SubmitPage submittedData={submittedData} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
