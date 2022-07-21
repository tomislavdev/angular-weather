import { Weather } from "./weather";

export interface DailyForecast {
  dt: number;
  wind_speed: number;
  feels_like: {
    day: number;
    night: number;
  };
  clouds: number;
  pressure: number;
  humidity: number;
  temp: {
    min: number;
    max: number;
  },
  weather: Weather[];
}
