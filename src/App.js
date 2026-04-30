import { useState } from 'react';
import './App.css';
import backgroundImage from './background.jpg';

function App() {
  // Store the API key for OpenWeatherMap
  const API_KEY = '4b42ef867186938a25dfa711d5b531e2'; 

  // State to store the city name the user types
  const [city, setCity] = useState('');

  // State to store the weather data from the API
  const [weather, setWeather] = useState(null);

  // Function to fetch weather data when user clicks Search
  const handleSearch = async () => {
    // Check if the input field is empty
    if (city === '') {
      alert('Please enter a city name');
      return;
    }

      // Try to fetch weather data, catch any errors
      try {
        // Build the API with city name and API key 
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

      // Make the API request
      const response = await fetch(url);
      // Convert the response to JSON format
      const data = await response.json();

      // Check if the request was successfull 
      if (response.ok) {
        console.log(data);
        // Save the weather data to state
        setWeather(data);
      } else {
        // City not found or other API error
        alert('City not found. Please try again.');
        setWeather(null);
      }
    } catch (error) {
      // Handle netwrk errors or other unexpected issues
      alert('Something went wrong. Please try again later');
      console.error(error);
    }

    console.log('Searching for:', city);
  };




  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1>Weather App</h1>


      {/*Input field for city name */}
      <input
      typer="text"
      placeholder="Enter city name"
      value={city}
      onChange={(e)  => setCity(e.target.value)}
      />
      
      {/*Search button*/}
      <button onClick={handleSearch}>Search</button>

      {/* Display weather data only if it exists */}
      {weather && (
        <div className="weather-info">
          <h2>{weather.name}</h2>

          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Feels Like: {weather.main.feels_like}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}
      

      
    </div>
  );
}

export default App;
