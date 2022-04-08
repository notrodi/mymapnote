import { IconModule } from './../icon/icon.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating.component';



@NgModule({
  declarations: [
    RatingComponent
  ],
  exports: [
    RatingComponent
  ],
  imports: [
    CommonModule,
    IconModule
  ]
})
export class RatingModule { }
