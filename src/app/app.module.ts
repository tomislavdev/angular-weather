import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "./shared/shared.module";
import { CurrentForecastModule } from "./modules/current-forecast/current-forecast.module";
import { DailyForecastModule } from "./modules/daily-forecast/daily-forecast.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    CurrentForecastModule,
    DailyForecastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
