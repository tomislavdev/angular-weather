import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyForecastRoutingModule } from './daily-forecast-routing.module';
import { DailyForecastComponent } from './daily-forecast.component';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [
    DailyForecastComponent
  ],
  exports: [
    DailyForecastComponent
  ],
  imports: [
    CommonModule,
    DailyForecastRoutingModule,
    SharedModule
  ]
})
export class DailyForecastModule { }
