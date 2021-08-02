import React from 'react';
import './App.css';
import { Container } from './styles/globalStyle';
import CurrentWeather from './components/currentWeather';
import ForecastData from './components/forecast';

function App() {
  return (
    <div className="App">
      <Container>
        <CurrentWeather />
        <ForecastData />
      </Container>
    </div>
  );
}

export default App;
