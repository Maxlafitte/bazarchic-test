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
import { Paragraph, Loading } from "../styles/globalStyle";
import Moment from 'react-moment';
import moment from 'moment';

const CurrentWeather = () => {

    const [current, setCurrent] = useState<CurrentWeatherProps | null>(null)
    const [loading, setLoading] = useState(true)

    const fetchWeather = () => {
        axios.get<CurrentWeatherProps>(`https://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
        .then(res => {
        setCurrent(res.data)
        setLoading(false)
        // console.log(res.data)
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
                    loading && (
                        <Loading>
                            Loading ...
                        </Loading>
                    )
                }
                {
                    current && (
                        <>
                            <CurrentWeatherInfo>
                                <>
                                    <CurrentWeatherTitle>{current.name}</CurrentWeatherTitle>
                                    <Moment date={moment()} format="dddd Do MMMM" />
                                    <Separation/>
                                    <CurrentWeatherTitle>{current.main.temp.toFixed(0)} C°</CurrentWeatherTitle>
                                    <span>{current.main.temp_max.toFixed(0)} C°/ {current.main.temp_min.toFixed(0)} C°</span>
                                    <CurrentWeatherDescription>
                                        <img src={`http://openweathermap.org/img/wn/${current.weather[0].icon}.png`} alt={current.weather[0].description} />
                                        <Paragraph>{current.weather[0].description}</Paragraph>
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