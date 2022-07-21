import { Component, OnInit } from '@angular/core';
import { FormService } from "../../core/services/form.service";
import { FormGroup } from "@angular/forms";
import { CITIES } from "../../shared/data/cities";
import { City } from "../../shared/models/city";
import { ForecastService } from "../../core/services/forecast.service";
import { Forecast } from "../../shared/models/forecast";
import { Title } from "@angular/platform-browser";

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
    private forecastService: ForecastService,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.form = this.formService.initForecastForm();
  }

  horizontalSlide(toRight: boolean) {
    const scrollValue = toRight ? 120 : -120;
    document.getElementById('inner-forecast-container').scrollLeft += scrollValue;
  }

  openStationaryMetricsForm() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });

    // toggleStationaryMetrics(true);
  }

  submitForm(chosenCity: HTMLSelectElement) {
    const city: City = this.cities.filter((city: City) => city.id === +chosenCity.value)[0];
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
}
