// BookingPage.js
import React from "react";
import Footer from "../components/Footer";
import Bookingform from "../components/Bookingform";
import Header from "../components/Header";

const BookingPage = ({ availableTimes, updateTimes }) => {
  return (
    <div>
      <Header />
      <Bookingform availableTimes={availableTimes} updateTimes={updateTimes} />
      <Footer />
    </div>
  );
};

export default BookingPage;
