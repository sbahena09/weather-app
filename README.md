# Weather App

A real-time weather application built with React that fetches live weather data using the OpenWeatherMap API.

![Weather App Screenshot](screenshot.png)

## Features

- Real-time weather data for any city worldwide
- Displays temperature, humidity, weather conditions, and weather icons
- Clean, modern UI with background image
- Error handling for invalid city names
- Responsive design

## Technologies Used

- **React.js** - Frontend framework
- **JavaScript (ES6+)** - Programming language
- **CSS3** - Styling and layout
- **OpenWeatherMap API** - Weather data source
- **Git & GitHub** - Version control

## Live Demo

[View Live Demo](https://real-time-weather-kappa.vercel.app/)

## Installation

To run this project locally:

1. Clone the repository:
```bash
   git clone https://github.com/sbahena09/weather-app.git
```

2. Navigate to the project directory:
```bash
   cd weather-app
```

3. Install dependencies:
```bash
   npm install
```

4. Get your free API key from [OpenWeatherMap](https://openweathermap.org/api)

5. Add your API key in `src/App.js`:
```javascript
   const API_KEY = 'your_api_key_here';
```

6. Start the development server:
```bash
   npm start
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. Enter a city name in the search box
2. Click the "Search" button
3. View real-time weather information including temperature, conditions, humidity, and weather icon

## Future Enhancements

- [ ] Add Celsius/Fahrenheit toggle
- [ ] Display wind speed and sunrise/sunset times
- [ ] Add loading spinner for better UX
- [ ] 5-day weather forecast
- [ ] Geolocation to detect user's current location

## Author

**Sergio Bahena**
- GitHub: [@sbahena09](https://github.com/sbahena09)
- LinkedIn: [Sergio Bahena](https://www.linkedin.com/in/sergio-bahena-4b91761b5/) 

## License

This project is open source and available under the MIT License.
