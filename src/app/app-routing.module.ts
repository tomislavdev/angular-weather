import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/forecast', pathMatch: 'full' },
  { path: 'forecast', loadChildren: () => import('./modules/forecast/forecast.module').then(m => m.ForecastModule) },
  { path: 'hourly', loadChildren: () => import('./modules/hourly-forecast/hourly-forecast.module').then(m => m.HourlyForecastModule) },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
