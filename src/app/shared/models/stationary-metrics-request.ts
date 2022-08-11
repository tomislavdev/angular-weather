export interface StationaryMetricsRequest {
  station_id: string;
  dt: number;
  temperature: number;
  wind_speed: number;
  humidity: number;
  pressure: number;
  rain_1h: number;
}
