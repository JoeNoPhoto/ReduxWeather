import axios from 'axios';

const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPENWEATHER_API_KEY}`;

// create const to keep action types consistent between action creators and reducers
export const FETCH_WEATHER = 'FETCH_WEATHER';

// create an action creator
export function fetchWeather(city) {
  const url = `${ROOT_URL}&units=imperial&q=${city}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
