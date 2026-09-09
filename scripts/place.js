document.getElementById("currentyear").innerHTML = new Date().getFullYear();

/* last modified time for footer */
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;


// Static weather data matching the HTML content
const temperature = 79; // in °F
const windSpeed = 7;    // in mph

// Function to calculate wind chill in Fahrenheit
const calculateWindChill = (T, V) => 35.74 + (0.6215 * T) - (35.75 * Math.pow(V, 0.16)) + (0.4275 * T * Math.pow(V, 0.16));

// Check if conditions for wind chill calculation are met (Temp <= 50°F and Wind > 3mph)
if (temperature <= 50 && windSpeed > 3) {
    // Round the result to one decimal place and add the unit symbol
    const windChillFactor = calculateWindChill(temperature, windSpeed).toFixed(1) + " °F";
    // Target the new HTML ID to show the calculated number
    document.getElementById("wind-chill").textContent = windChillFactor;
} else {
    // Target the new HTML ID to show N/A
    document.getElementById("wind-chill").textContent = "N/A";
}