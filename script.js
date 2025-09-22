async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "Enter your api key"; // Replace with your API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    showWeather(data);
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = `<p style="color:yellow;">${error.message}</p>`;
  }
}

function showWeather(data) {
  const weatherHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
    <p><strong>${data.weather[0].main}</strong> - ${data.weather[0].description}</p>
    <p>🌡️ Temperature: ${data.main.temp} °C</p>
    <p>💧 Humidity: ${data.main.humidity}%</p>
    <p>🌬️ Wind Speed: ${data.wind.speed} m/s</p>
  `;
  document.getElementById("weatherResult").innerHTML = weatherHTML;
}
