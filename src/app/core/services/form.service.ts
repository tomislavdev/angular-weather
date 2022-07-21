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
}
