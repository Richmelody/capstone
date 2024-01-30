// BookingForm.js
import React, { useState, useEffect } from "react";
import "./styles/Bookingform.css";

const Bookingform = ({ availableTimes, updateTimes }) => {
  // State variables
  const [selectedDate, setSelectedDate] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [selectedOccasion, setSelectedOccasion] = useState("Birthday");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Event handlers
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleGuestsChange = (event) => {
    setNumberOfGuests(event.target.value);
  };

  const handleOccasionChange = (event) => {
    setSelectedOccasion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if all required fields are filled
    if (selectedDate !== "" && numberOfGuests !== "") {
      // Add logic to handle form submission (API call, etc.)
      console.log("Form submitted:", {
        selectedDate,
        selectedTime: availableTimes, // Use availableTimes directly
        numberOfGuests,
        selectedOccasion,
      });

      // Set formSubmitted to true
      setFormSubmitted(true);

      // Save submitted data
      setSubmittedData({
        selectedDate,
        selectedTime: availableTimes, // Use availableTimes directly
        numberOfGuests,
        selectedOccasion,
      });
    } else {
      // Display a message below the form with selected values
      alert("Please select all required fields.");
    }
  };

  useEffect(() => {
    // Reset form values only if the form has been submitted
    if (formSubmitted) {
      setSelectedDate("");
      setNumberOfGuests(1);
      setSelectedOccasion("Birthday");
      // Reset formSubmitted to false after resetting the form
      setFormSubmitted(false);
    }
  }, [formSubmitted]);

  return (
    <div className="booking-container">
      <form className="booking-form" onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={selectedDate}
          onChange={handleDateChange}
        />

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={availableTimes[0]} onChange={() => {}}>
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={numberOfGuests}
          onChange={handleGuestsChange}
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={selectedOccasion}
          onChange={handleOccasionChange}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <input type="submit" value="Make Your reservation" />
      </form>

      {submittedData && (
        <div className="success-message">
          <p>Form submitted successfully!</p>
          <ul>
            <li>Date: {submittedData.selectedDate}</li>
            <li>Time: {submittedData.selectedTime.join(", ")}</li>
            <li>Number of guests: {submittedData.numberOfGuests}</li>
            <li>Occasion: {submittedData.selectedOccasion}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Bookingform;
