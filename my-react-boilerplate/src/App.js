import React, { useReducer, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Reservation from "./pages/Reservation";
import BookingPage from "./pages/BookingPage";
import fetchAPI from "./fetchdata.js";

// Reducer function
const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES_SUCCESS":
      // Return the new state with the fetched available times
      return action.payload;
    case "UPDATE_TIMES_ERROR":
      // Handle error if needed
      console.error("Error updating times:", action.error);
      return state;
    default:
      return state;
  }
};

// Function to initialize times
const initializeTimes = () => {
  const formattedDate = new Date().toISOString();

  // Return the promise returned by fetchAPI
  return fetchAPI(formattedDate);
};

const App = () => {
  // Reducer hook
  const [availableTimes, dispatchTimes] = useReducer(
    timesReducer,
    initializeTimes()
  );

  // State for selectedDate
  const [selectedDate, setSelectedDate] = useState(() => {
    const currentDate = new Date();
    // Format the date as ISO 8601
    const initialDate = currentDate.toISOString().split("T")[0];
    return initialDate;
  });

  // Function to handle state change
  const updateTimes = async (date) => {
    try {
      // Fetch the available times based on the selected date
      const newTimes = await fetchAPI(date);

      // Dispatch an action with the fetched times
      dispatchTimes({ type: "UPDATE_TIMES_SUCCESS", payload: newTimes });
    } catch (error) {
      // Dispatch an action with the error if the fetch fails
      dispatchTimes({ type: "UPDATE_TIMES_ERROR", error });
    }

    // Update selectedDate state
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
          path="/BookingPage"
          element={
            <BookingPage
              availableTimes={availableTimes}
              selectedDate={selectedDate}
              updateTimes={updateTimes}
              onDateChange={setSelectedDate}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
