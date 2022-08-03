import { Component, Input, OnInit } from '@angular/core';
import { CurrentForecast } from "../../shared/models/current-forecast";
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-current-forecast',
  templateUrl: './current-forecast.component.html',
  styleUrls: ['./current-forecast.component.sass']
})
export class CurrentForecastComponent implements OnInit {
  forecastIconsEndpoint = environment.weatherApiIconsEndpoint;
  city: string;

  @Input('currentForecast') currentForecast: CurrentForecast;

  constructor() { }

  ngOnInit(): void {
    this.city = JSON.parse(localStorage.getItem('forecast'))?.data?.timezone || '';
  }
}
