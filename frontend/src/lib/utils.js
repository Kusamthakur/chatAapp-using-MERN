export function formatMessageTime(date) {
  // Convert the input date to a Date object
  const inputDate = new Date(date);

  // Format the time directly in the local timezone (assumes system time is IST)
  return inputDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Enables AM/PM format
  });
}
