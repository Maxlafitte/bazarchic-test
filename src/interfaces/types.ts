export interface ForecastWeatherProps {
    list: List[]
}

export interface CurrentWeatherProps {
    name: string,
    main: TempValues,
    weather: WeatherDescription,
    dt: number
}

interface List {
    main: TempValues,
    weather: WeatherDescription,
    dt: number,
    dt_txt: string,
    id: number
}

interface TempValues {
    temp_min: number,
    temp_max: number,
    temp: number,
}

interface WeatherDescription {
    [index: number]: {
        icon: string;
        description: string;  
    }
}