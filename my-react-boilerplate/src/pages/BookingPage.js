// BookingPage.js
import React from "react";
import Bookingform from "../components/Bookingform";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const BookingPage = ({
  availableTimes,
  updateTimes,
  selectedDate,
  onDateChange,
  onSubmit,
}) => {
  const navigate = useNavigate();

  const handleFormSubmit = (data) => {
    // Call the onSubmit callback to store the submitted data
    onSubmit(data);

    // Navigate to the SubmitPage
    navigate("/submit");
  };

  return (
    <div>
      <Header />
      <Bookingform
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        selectedDate={selectedDate}
        onDateChange={onDateChange}
        onSubmit={handleFormSubmit} // Pass the callback function
      />
      <Footer />
    </div>
  );
};

export default BookingPage;
