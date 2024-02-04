import React, { useEffect, useState } from "react";
import "./styles/Bookingform.css";

const Bookingform = ({
  selectedDate,
  onDateChange,
  availableTimes,
  updateTimes,
  onSubmit,
}) => {
  // State for the number of guests
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  // State for the selected occasion (default: "Birthday")
  const [selectedOccasion, setSelectedOccasion] = useState("Birthday");

  // State to track if the form has been submitted
  const [formSubmitted, setFormSubmitted] = useState(false);

  // State to store submitted form data
  const [submittedData, setSubmittedData] = useState(null);

  const [selectedTime, setSelectedTime] = useState(
    availableTimes.length > 0 ? availableTimes[0] : ""
  );

  // Function to handle date changes
  const handleDateChange = (date) => {
    onDateChange(date);
    updateTimes(date); // Call updateTimes when the date changes
  };

  // Function to handle changes in the number of guests
  const handleGuestsChange = (event) => {
    setNumberOfGuests(event.target.value);
  };

  // Function to handle changes in the selected occasion
  const handleOccasionChange = (event) => {
    setSelectedOccasion(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if all required fields are filled
    if (selectedDate !== "" && numberOfGuests !== "") {
      // Set formSubmitted to true
      setFormSubmitted(true);

      // Save submitted data
      setSubmittedData({
        selectedDate,
        selectedTime: [selectedTime],
        numberOfGuests,
        selectedOccasion,
      });
    } else {
      // Display an alert if any required field is not filled
      alert("Please select all required fields.");
    }
  };

  // Effect to reset form values when the form has been submitted
  useEffect(() => {
    if (formSubmitted) {
      onDateChange(""); // Reset the date in the parent component
      setNumberOfGuests(1);
      setSelectedOccasion("Birthday");
      setFormSubmitted(false); // Reset formSubmitted to false after resetting the form
    }
  }, [formSubmitted, onDateChange, availableTimes]);

  // Effect to call the onSubmit callback when submittedData changes
  useEffect(() => {
    if (submittedData) {
      onSubmit(submittedData);
    }
  }, [submittedData, onSubmit]);

  return (
    <div className="booking-container">
      <form className="booking-form" onSubmit={handleSubmit}>
        {/* Input for selecting the date */}
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={selectedDate}
          onChange={(e) => handleDateChange(e.target.value)}
        />

        {/* Dropdown for selecting the time */}
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={selectedTime} onChange={handleTimeChange}>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>

        {/* Input for entering the number of guests */}
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

        {/* Dropdown for selecting the occasion */}
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={selectedOccasion}
          onChange={handleOccasionChange}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        {/* Submit button */}
        <input type="submit" value="Make Your reservation" />
      </form>

      {/* Display success message with submitted data if form has been submitted
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
      )} */}
    </div>
  );
};

export default Bookingform;
