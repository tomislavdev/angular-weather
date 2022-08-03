import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HourlyForecastRoutingModule } from './hourly-forecast-routing.module';
import { HourlyForecastComponent } from './hourly-forecast.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [
    HourlyForecastComponent
  ],
  imports: [
    CommonModule,
    HourlyForecastRoutingModule,
    SharedModule
  ]
})
export class HourlyForecastModule { }
