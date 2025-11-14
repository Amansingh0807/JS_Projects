document.addEventListener('DOMContentLoaded', () => {
    const weatherData = {
        location: "New Delhi, India",
        temperature: "68°F",
        description: "Partly Cloudy",
        humidity: "55%",
        wind: "10 mph"
    };

    document.getElementById('location').textContent = weatherData.location;
    document.getElementById('temperature').textContent = weatherData.temperature;
    document.getElementById('description').textContent = weatherData.description;
    document.getElementById('humidity').textContent = weatherData.humidity;
    document.getElementById('wind').textContent = weatherData.wind;
});
