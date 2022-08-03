import { Component, OnInit } from '@angular/core';
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {
  isForecastPage: boolean;
  hourlyLink: string;

  constructor() { }

  ngOnInit() {
    this.initFields();
  }

  initFields() {
    const forecast = JSON.parse(localStorage.getItem('forecast'));
    const lon = forecast?.data?.lon || environment.defaultLon;
    const lat = forecast?.data?.lat || environment.defaultLat;

    this.isForecastPage = window.location.pathname === '/forecast';
    this.hourlyLink = `/hourly?lon=${ lon }&lat=${ lat }`;
  }
}
