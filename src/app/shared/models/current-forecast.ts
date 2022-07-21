import { Weather } from "./weather";

export interface CurrentForecast {
  dt: number;
  clouds: number;
  pressure: number;
  humidity: number;
  sunrise: number;
  sunset: number;
  temp: number;
  wind_speed: number;
  feels_like: number;
  weather: Weather[];
}
