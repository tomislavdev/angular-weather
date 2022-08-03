import { Component, OnInit } from '@angular/core';
import { Forecast } from "../../shared/models/forecast";
import { ActivatedRoute } from "@angular/router";
import { ForecastService } from "../../core/services/forecast.service";
import { Title } from "@angular/platform-browser";
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-hourly-forecast',
  templateUrl: './hourly-forecast.component.html',
  styleUrls: ['./hourly-forecast.component.sass']
})
export class HourlyForecastComponent implements OnInit {
  forecast: Forecast;
  forecastIconsEndpoint = environment.weatherApiIconsEndpoint;

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    public forecastService: ForecastService
  ) { }

  ngOnInit(): void {
    this.getForecast();
  }

  getForecast() {
    const forecastStorage = JSON.parse(localStorage.getItem('forecast'));

    if (forecastStorage) {
      this.forecast = forecastStorage;
    } else {
      this.forecastService.getForecast(environment.defaultLat, environment.defaultLon).subscribe({
        next: (forecast) => {
          forecast.hourly = forecast.hourly.slice(0, 24);
          localStorage.setItem('forecast', JSON.stringify({ data: forecast }));
          this.forecast = JSON.parse(localStorage.getItem('forecast'));
        },
        error:() => {
          localStorage.setItem('forecast', JSON.stringify({ error: 'An error occurred. Please try again later.'}));
        }
      });
    }

    this.titleService.setTitle(this.forecast.data.timezone.split('/')[1] + ' Weather Forecast');
  }
}
