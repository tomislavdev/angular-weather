import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastRoutingModule } from './forecast-routing.module';
import { ForecastComponent } from './forecast.component';
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";
import { CurrentForecastModule } from "../current-forecast/current-forecast.module";
import { DailyForecastModule } from "../daily-forecast/daily-forecast.module";
import { StationaryMetricsComponent } from './stationary-metrics/stationary-metrics.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    ForecastComponent,
    StationaryMetricsComponent
  ],
  imports: [
    CommonModule,
    ForecastRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    CurrentForecastModule,
    DailyForecastModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class ForecastModule { }
