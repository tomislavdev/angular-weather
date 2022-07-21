import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastRoutingModule } from './forecast-routing.module';
import { ForecastComponent } from './forecast.component';
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";
import { CurrentForecastModule } from "../current-forecast/current-forecast.module";
import { DailyForecastModule } from "../daily-forecast/daily-forecast.module";

@NgModule({
  declarations: [
    ForecastComponent
  ],
  imports: [
    CommonModule,
    ForecastRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    CurrentForecastModule,
    DailyForecastModule
  ]
})
export class ForecastModule { }