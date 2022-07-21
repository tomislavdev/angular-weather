import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentForecastRoutingModule } from './current-forecast-routing.module';
import { CurrentForecastComponent } from './current-forecast.component';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [
    CurrentForecastComponent
  ],
  exports: [
    CurrentForecastComponent
  ],
  imports: [
    CommonModule,
    CurrentForecastRoutingModule,
    SharedModule
  ]
})
export class CurrentForecastModule { }
