export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}
export function getCurrentTimeInMex(): Date {
  // Create a date object with the current UTC time
  const now = new Date();

  // Convert the UTC time to Mexico's time
  const offsetMexico = 2; 
  now.setHours(now.getUTCHours() + offsetMexico);

  return now;
}

export function formatTimeForMexico(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // This will format the time in 12-hour format with AM/PM
    timeZone: "America/Mexico_City", // Set the time zone to Mexico City
  };

  let formattedTime = new Intl.DateTimeFormat("es-MX", options).format(date);

  // Append the time zone abbreviation. You can automate this with libraries like `moment-timezone`.
  // For simplicity, here I'm just appending "CST", but do remember that Mexico switches between CST and CDT.
  formattedTime += "";

  return formattedTime;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
