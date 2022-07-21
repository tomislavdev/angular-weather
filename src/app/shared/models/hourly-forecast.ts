import { Weather } from "./weather";

export interface HourlyForecast {
  dt: number;
  wind_speed: number;
  feels_like: number;
  clouds: number;
  pressure: number;
  humidity: number;
  weather: Weather[];
}
