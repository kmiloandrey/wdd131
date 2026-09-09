document.getElementById("currentyear").innerHTML = new Date().getFullYear();

/* last modified time for footer */
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;


// Static weather data for Utah 
const temperature = 78;   // in °F (Average September max temp in Utah)
const conditions = "Sunny";
const windSpeed = 5;      // in mph (Average September wind speed)

// Display the core weather data automatically in the HTML elements
document.getElementById("temperature").textContent = `${temperature} °F`;
document.getElementById("conditions").textContent = conditions;
document.getElementById("wind").textContent = `${windSpeed} mph`;

// Function to calculate wind chill in Fahrenheit using exactly one line of code
const calculateWindChill = (T, V) => 35.74 + (0.6215 * T) - (35.75 * Math.pow(V, 0.16)) + (0.4275 * T * Math.pow(V, 0.16));

// Check if conditions for wind chill calculation are met (Temp <= 50°F and Wind > 3mph)
if (temperature <= 50 && windSpeed > 3) {
    // Round the result to one decimal place and add the unit symbol
    const windChillFactor = calculateWindChill(temperature, windSpeed).toFixed(1) + " °F";
    document.getElementById("wind-chill").textContent = windChillFactor;
} else {
    // If conditions are not met, display N/A
    document.getElementById("wind-chill").textContent = "N/A";
}