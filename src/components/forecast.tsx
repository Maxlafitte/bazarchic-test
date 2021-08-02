import React, {useEffect, useState} from "react"
import axios from 'axios'
import { ForecastWeatherProps } from '../interfaces/types'
import { ForecastContainer, ForecastInfo } from "../styles/forecastWeather";
import { Paragraph, Loading } from "../styles/globalStyle";
import Moment from 'react-moment';

const ForecastData = () => {

    const [weatherForecast, setWeatherForecast] = useState<ForecastWeatherProps>()
    const [loading, setLoading] = useState(true)

    // Fetch current weather with openweather, with the endPoint forecast, to get 5days of weather
    // Then set the state with the data
    const fetchForecastWeather = () => {
        axios.get<ForecastWeatherProps>(`https://api.openweathermap.org/data/2.5/forecast?q=paris&units=metric&cnt=39&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
        .then(res => {
        setWeatherForecast(res.data)
        setLoading(false)
        // console.log(res.data)
        })
        .catch(function (err) {
            console.log(err)
        })  
    }

    // Call fetchForecastWeather in useEffect, so it mounts when the page loads
    useEffect(() => {
        fetchForecastWeather()
    }, [])

    // No freeplan with openweather to get daily forecast only,
    // Only the 5days every 3hours
    // Save 1 item each 24h of the array, so the time is always the same
    const day1 = weatherForecast && weatherForecast.list[8]
    const day2 = weatherForecast && weatherForecast.list[16]
    const day3 = weatherForecast && weatherForecast.list[24]
    const day4 = weatherForecast && weatherForecast.list[32]
    // Map the array in the return statement to get 4 days forecast
    let days = [day1, day2, day3, day4 ]

    return (
        <ForecastContainer>
            {
                loading && (
                    <Loading>
                        Loading ...
                    </Loading>
                )
            }
            {
                days.map((item, i) => (
                    <ForecastInfo key={i}>
                        <Moment date={item && item.dt_txt} format="ddd Do MMMM" />
                        <img src={`http://openweathermap.org/img/wn/${item && item.weather[0].icon}.png`} alt={item && item.weather[0].description} />
                        <Paragraph>{item && item.weather[0].description}</Paragraph>
                        <Paragraph>{item && item.main.temp_max.toFixed(0)} C° / {item && item.main.temp_min.toFixed(0)} C°</Paragraph>
                    </ForecastInfo> 
                ))
            }  
        </ForecastContainer>
    )
}

export default ForecastData