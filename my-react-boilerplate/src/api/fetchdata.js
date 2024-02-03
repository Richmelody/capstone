function fetchAPI(date) {
  const availableTimes = [
    // Provide your list of possible reservation times here
    "10:00",
    "11:00",
    "12:00",
    "14:00",
    "15:00",
    "16:00",
  ];

  const randomAvailableTimes = availableTimes.filter((time) => {
    // Add any date-based filtering logic here if needed
    // e.g., exclude certain times on specific days
    return true; // Currently allowing all times for any date
  });

  const shuffledTimes = randomAvailableTimes.slice(); // Create a copy
  for (let i = shuffledTimes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledTimes[i], shuffledTimes[j]] = [shuffledTimes[j], shuffledTimes[i]];
  }

  return shuffledTimes;
}
export default fetchAPI; // Export the function
