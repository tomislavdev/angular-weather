import { CurrentForecast } from "./current-forecast";
import { DailyForecast } from "./daily-forecast";
import { HourlyForecast } from "./hourly-forecast";

export interface Forecast {
  error?: string;
  data?: {
    lat: Number;
    lon: Number;
    timezone: string;
    current: CurrentForecast;
    daily: DailyForecast[];
    hourly: HourlyForecast[];
  };
}
