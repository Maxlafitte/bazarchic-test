import styled from "styled-components"
import { device } from './devices'

// Style for the forecastWeather.tsx component
export const ForecastContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: white;
    justify-content: space-around;
    padding: 15px 0px;
    @media ${device.mobileL}  { 
        flex-direction: column;
        margin-top: 10px;
    }
`

export const ForecastInfo = styled.div`
    text-align: center;
    text-transform: capitalize;
    border-right: 1px solid grey;
    width: 100%;
    :last-child {
        border: none
    }
    img {
        align-items: center;
        align-content: center;
        justify-content: center;
        display: flex;
        margin: auto;
    }
    @media ${device.mobileL}  { 
        margin: 15px 0px;
        border-right: none;
    }
`