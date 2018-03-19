import axios from 'axios';

const APIkey = '0ef345ad5cf3b9e84065259f4e14da5a';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${APIkey}` ;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;

    const request = axios.get(url);

    return (
        type: FETCH_WEATHER,
        payload: request
    )
}