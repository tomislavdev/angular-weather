import { Component, OnInit } from '@angular/core';
import { FormService } from "../../core/services/form.service";
import { FormGroup } from "@angular/forms";
import { CITIES } from "../../shared/data/cities";
import { City } from "../../shared/models/city";
import { ForecastService } from "../../core/services/forecast.service";
import { Forecast } from "../../shared/models/forecast";
import { Title } from "@angular/platform-browser";
import { MatDialog } from "@angular/material/dialog";
import { StationaryMetricsComponent } from "./stationary-metrics/stationary-metrics.component";

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.sass']
})
export class ForecastComponent implements OnInit {
  form: FormGroup;
  forecast: Forecast;

  cities = CITIES;

  constructor(
    private formService: FormService,
    private titleService: Title,
    private dialog: MatDialog,
    public forecastService: ForecastService,
  ) { }

  ngOnInit(): void {
    this.form = this.formService.initForecastForm();
    this.loadFromStorage();
  }

  loadFromStorage() {
    const forecastStorage = JSON.parse(localStorage.getItem('forecast'))?.data;

    if (forecastStorage) {
      const city = this.cities.filter(city => city.name === forecastStorage.timezone.split('/')[1]);

      if (city) {
        const cityId = city[0].id.toString();
        this.form.get('city').patchValue(cityId);
        this.submitForm(cityId);
      }
    }
  }

  submitForm(cityId: string) {
    const city: City = this.cities.filter((city: City) => city.id === +cityId)[0];

    this.forecastService.getForecast(city.lat, city.lon).subscribe({
      next: (forecast) => {
        const title = forecast.timezone.split('/')[1] + ' Weather Forecast';

        // Get only 24 hours
        forecast.hourly = forecast.hourly.slice(0, 24);

        localStorage.setItem('forecast', JSON.stringify({ data: forecast }));

        this.forecast = JSON.parse(localStorage.getItem('forecast'));
        this.titleService.setTitle(title);
      },
      error:() => {
        localStorage.setItem('forecast', JSON.stringify({ error: 'An error occurred. Please try again later.'}));
      }
    });
  }

  openStationaryMetricsForm() {
    this.dialog.open(StationaryMetricsComponent);
  }
}
