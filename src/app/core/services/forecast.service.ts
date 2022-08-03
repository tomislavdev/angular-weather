import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { ApiService } from "./api.service";
import { take } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  constructor(private apiService: ApiService) { }

  getForecast(lat: string, lon: string) {
    const weatherApiUrl = `${ environment.weatherApiOneCallEndpoint }?lat=${ lat }&lon=${ lon }&\
        units=metric&exclude=minutely,alerts&appid=${ environment.weatherApiKey }`.replaceAll(' ', '');

    return this.apiService.get(weatherApiUrl).pipe(take(1));
  }

  horizontalSlide(toRight: boolean, elementId: string, value: number) {
    const scrollValue = toRight ? value : -value;
    document.getElementById(elementId).scrollLeft += scrollValue;
  }
}
