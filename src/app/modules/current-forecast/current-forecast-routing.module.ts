import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentForecastComponent } from './current-forecast.component';

const routes: Routes = [{ path: '', component: CurrentForecastComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrentForecastRoutingModule { }
