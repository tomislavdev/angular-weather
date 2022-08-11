import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FormService } from "../../../core/services/form.service";
import { environment } from "../../../../environments/environment";
import { ApiService } from "../../../core/services/api.service";
import { HttpHeaders } from "@angular/common/http";
import { StationaryMetricsRequest } from "../../../shared/models/stationary-metrics-request";
import { take } from "rxjs";

@Component({
  selector: 'app-stationary-metrics',
  templateUrl: './stationary-metrics.component.html',
  styleUrls: ['./stationary-metrics.component.sass']
})
export class StationaryMetricsComponent implements OnInit {
  stationaryForm: FormGroup;
  error: string;
  success: string;

  constructor(
    private formService: FormService,
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.stationaryForm = this.formService.initStationaryMetricsForm();
  }

  submitStationaryForm() {
    if (this.stationaryForm.valid) {
      const formData = this.stationaryForm.value;
      const options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
      const weatherApiUrl = `${ environment.weatherApiMeasurementsEndpoint }\
        ?appid=${ environment.weatherApiKey }`.replaceAll(' ', '');

      const requestData: StationaryMetricsRequest = {
        dt: Date.now(),
        station_id: environment.defaultStationId || '',
        temperature: parseFloat(formData.temperature),
        wind_speed: parseFloat(formData.windSpeed),
        humidity: parseFloat(formData.humidity),
        pressure: parseFloat(formData.pressure),
        rain_1h: parseFloat(formData.rain),
      };

      this.apiService.post(weatherApiUrl, requestData, options).pipe(take(1)).subscribe({
        next: () => this.success = 'The stationary metrics have been successfully submitted.',
        error: () => this.error = 'An error occurred. Please try again later.',
      });
    }
  }
}
