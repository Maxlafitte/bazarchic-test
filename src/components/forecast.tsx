import React, {useEffect, useState} from "react"
import axios from 'axios'
import { ForecastWeatherProps } from '../interfaces/types'
import { ForecastContainer, ForecastInfo } from "../styles/forecastWeather";
import { Paragraph } from "../styles/globalStyle";
import Moment from 'react-moment';

const ForecastData = () => {

    const [weatherForecast, setWeatherForecast] = useState<ForecastWeatherProps>()

    const fetchForecastWeather = () => {
        axios.get<ForecastWeatherProps>(`https://api.openweathermap.org/data/2.5/forecast?q=paris&units=metric&cnt=39&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
        .then(res => {
        setWeatherForecast(res.data)
        console.log(res.data)
        })
        .catch(function (err) {
            console.log(err)
        })  
    }

    useEffect(() => {
        fetchForecastWeather()
    }, [])

    const day1 = weatherForecast && weatherForecast.list[8]
    const day2 = weatherForecast && weatherForecast.list[16]
    const day3 = weatherForecast && weatherForecast.list[24]
    const day4 = weatherForecast && weatherForecast.list[32]
    let days = [day1, day2, day3, day4 ]
    // console.log(days)

    return (
        <ForecastContainer>
            
            {
                days.map((item, i) => (
                    <ForecastInfo key={i}>
                        <Moment date={item && item.dt_txt} format="dddd Do MMM" locale="fr" />
                        <img src={`http://openweathermap.org/img/wn/${item && item.weather[0].icon}.png`} alt={item && item.weather[0].description} />
                        <Paragraph>{item && item.weather[0].description}</Paragraph>
                        <Paragraph>{item && item.main.temp_min.toFixed(0)} C° / {item && item.main.temp_max.toFixed(0)} C° </Paragraph>
                    </ForecastInfo>
                ))
            }
            
        </ForecastContainer>
    )
}

export default ForecastData