export function updateAverage(currentAverage, totalRatings, newRating) {
  if (totalRatings === 0) return newRating.toFixed(1); // Handle first rating

  const total = currentAverage * totalRatings; // Total previous rating sum
  const newTotal = total + newRating;          // Add new rating to it
  const newCount = totalRatings + 1;           // Increase total number of ratings
  const updatedAverage = newTotal / newCount;  // New average

  return updatedAverage.toFixed(1); // Rounded to 1 decimal
}
