import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor() { }

  initForecastForm() {
    return new FormGroup({
      'city': new FormControl(
        localStorage.getItem('city') || '',
        [Validators.required]
      )
    });
  }

  initStationaryMetricsForm() {
    return new FormGroup({
      'username': new FormControl(
        localStorage.getItem('username'),
        [Validators.required, Validators.maxLength(20)]
      ),
      'email': new FormControl(
        localStorage.getItem('email'),
        [Validators.required, Validators.email]
      ),
      'temperature': new FormControl(
        localStorage.getItem('temperature'),
        [Validators.required, Validators.min(-20), Validators.max(60)]
      ),
      'windSpeed': new FormControl(
        localStorage.getItem('windSpeed'),
        [Validators.required, Validators.min(0), Validators.max(200)]
      ),
      'humidity': new FormControl(
        localStorage.getItem('humidity'),
        [Validators.required, Validators.min(0), Validators.max(100)]
      ),
      'pressure': new FormControl(
        localStorage.getItem('pressure'),
        [Validators.required, Validators.min(0), Validators.max(3000)]
      ),
      'rain': new FormControl(
        localStorage.getItem('rain'),
        [Validators.required, Validators.min(0), Validators.max(1000)]
      )
    });
  }
}
