import React, { useState, useEffect } from "react";
import axios from 'axios'
import { CurrentWeatherProps } from '../interfaces/types'
import { CurrentContainer,
         CurrentWeatherTitle, 
         CurrentWeatherDescription, 
         CurrentLogo, 
         CurrentWeatherInfo, 
         Separation 
        } from "../styles/currentWeather";
import Moment from 'react-moment';
import moment from 'moment-with-locales-es6';

const CurrentWeather = () => {

    const [current, setCurrent] = useState<CurrentWeatherProps | null>(null)

    const fetchWeather = () => {
        axios.get<CurrentWeatherProps>(`https://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
        .then(res => {
        setCurrent(res.data)
        console.log(res.data)
        })
        .catch(function (err) {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchWeather()
    }, [])

    return (
        <div>
            <CurrentContainer>
                {
                    current && (
                        <>
                            <CurrentWeatherInfo>
                                <>
                                    <CurrentWeatherTitle>{current.name}</CurrentWeatherTitle>
                                    <Moment date={moment()} format="dddd Do MMM" />
                                    <Separation/>
                                    <CurrentWeatherTitle>{current.main.temp.toFixed(0)} C°</CurrentWeatherTitle>
                                    <span>{current.main.temp_min.toFixed(0)} C° / {current.main.temp_max.toFixed(0)} C°</span>
                                    <CurrentWeatherDescription>
                                        <img src={`http://openweathermap.org/img/wn/${current.weather[0].icon}.png`} alt={current.weather[0].description} />
                                        <span>{current.weather[0].description}</span>
                                    </CurrentWeatherDescription>
                                </>
                            </CurrentWeatherInfo>
                            <CurrentLogo>
                                <img src={`http://openweathermap.org/img/wn/${current.weather[0].icon}.png`} alt={current.weather[0].description} />
                            </CurrentLogo>
                        </>
                    )
                }
            </CurrentContainer>
        </div>
    )
}

export default CurrentWeather