import { Component, Input, OnInit } from '@angular/core';
import { DailyForecast } from "../../shared/models/daily-forecast";
import { environment } from "../../../environments/environment";
import { Moment, unix } from "moment";

@Component({
  selector: 'app-daily-forecast',
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['./daily-forecast.component.sass']
})
export class DailyForecastComponent implements OnInit {
  dailyForecast: DailyForecast;
  currentDay: Moment;
  currentDayName: string;
  forecastIconsEndpoint = environment.weatherApiIconsEndpoint;

  @Input('index') index: number;
  @Input('first') first: boolean;
  @Input('last') last: boolean;

  constructor() { }

  ngOnInit(): void {
    this.getAndMapForecast();
  }

  getAndMapForecast() {
    const forecast = JSON.parse(localStorage.getItem('forecast'));

    this.dailyForecast = forecast.data.daily[this.index];
    this.currentDay = unix(this.dailyForecast.dt);
    this.currentDayName = this.index === 0 ? 'Today' : this.index === 1 ? 'Tomorrow' : this.currentDay.format('dddd');
  }
}
