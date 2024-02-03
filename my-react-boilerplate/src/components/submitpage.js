// SubmitPage.js
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./styles/SubmitPage.css"; // Import the CSS file

const SubmitPage = ({ submittedData }) => {
  return (
    <div>
      <Header />
      <div className="submit-page-container">
        {" "}
        {/* Updated class name */}
        <h1>Form Submitted Successfully!</h1>
        <ul>
          <li>Date: {submittedData.selectedDate}</li>
          <li>Time: {submittedData.selectedTime.join(", ")}</li>
          <li>Number of guests: {submittedData.numberOfGuests}</li>
          <li>Occasion: {submittedData.selectedOccasion}</li>
        </ul>
        {/* Add any additional content for the success page */}
      </div>
      <Footer />
    </div>
  );
};

export default SubmitPage;
