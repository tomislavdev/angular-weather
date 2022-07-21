import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from "@angular/router";
import { FloorNumberPipe } from './pipes/floor-number.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    NavigationComponent,
    FloorNumberPipe
  ],
  providers: [],
  exports: [
    NavigationComponent,
    FloorNumberPipe
  ]
})
export class SharedModule { }
