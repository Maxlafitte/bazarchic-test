import styled from "styled-components"

export const CurrentContainer = styled.div`
	display: flex;
	flex-direction: row;
`

export const CurrentWeatherTitle = styled.h2`
    margin: 0px;
    padding: 5px 0px;
`

export const Separation = styled.hr`
    width: 100%;
`

export const CurrentWeatherInfo = styled.div`
	display: flex;
    width: 70%;
	flex-direction: column;
    text-align: left;
    background-color: #0089e8;
    color: white;
    padding: 15px 25px;
`

export const CurrentWeatherDescription = styled.div`
    display: flex;
    align-items: center;
    span {
        font-weight: lighter;
    }
`

export const CurrentLogo = styled.div`
    background-color: #0082d6;
    align-items: center;
    align-content: center;
    justify-content: center;
    display: flex;
    width: 30%;
    img {
        height: 76px;
        width: 76px;
    }
`