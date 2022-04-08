import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceEditComponent } from './components/place-edit/place-edit.component';
import { RatingModule } from '../shared/components/rating/rating.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PlaceEditComponent
  ],
  exports: [
    PlaceEditComponent
  ],
  imports: [
    CommonModule,
    RatingModule,
    ReactiveFormsModule
  ]
})
export class PlaceEditDialogModule { }
