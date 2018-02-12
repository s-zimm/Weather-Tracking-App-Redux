import axios from 'axios';

const API_KEY = '87730da247b52d8c151da717309da4b7';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// Creates single variable for action type so the reducers and action types are all standardized
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us&units=imperial`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };

}