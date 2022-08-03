import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HourlyForecastComponent } from './hourly-forecast.component';

const routes: Routes = [{ path: '', component: HourlyForecastComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HourlyForecastRoutingModule { }
