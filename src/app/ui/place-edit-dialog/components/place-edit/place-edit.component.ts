import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mn-place-edit',
  templateUrl: './place-edit.component.html',
  styleUrls: ['./place-edit.component.scss']
})
export class PlaceEditComponent implements OnInit {

  public rating: FormControl = new FormControl(0, Validators.min(1));

  constructor() { }

  ngOnInit(): void {
  }

}
