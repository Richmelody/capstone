// BookingPage.js
import React from "react";
import Footer from "../components/Footer";
import Bookingform from "../components/Bookingform";
import Header from "../components/Header";

const BookingPage = ({
  availableTimes,
  updateTimes,
  selectedDate,
  onDateChange,
}) => {
  return (
    <div>
      <Header />
      <Bookingform
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        selectedDate={selectedDate}
        onDateChange={onDateChange}
      />
      <Footer />
    </div>
  );
};

export default BookingPage;
