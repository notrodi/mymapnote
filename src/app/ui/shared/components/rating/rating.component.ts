import { Component, OnInit, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { createValueAccessor } from '../../../../lib';

@Component({
  selector: 'mn-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  providers: [ createValueAccessor(() => RatingComponent) ]
})
export class RatingComponent implements OnInit, ControlValueAccessor {
  public stars: undefined[] = new Array(5);

  @Input()
  public set starCounter (value: number) {
    this.stars = new Array(value);
  }

  @Input()
  public readonly: boolean = false;

  constructor() { }
  
  ngOnInit(): void {
  }

  public updateFormControlCounter(ratingCount: number): void {
  }

  public updateFormControlTouchState(): void {
  }

  public registerOnChange(fn: (ratingCount: number) => void): void {
    this.updateFormControlCounter = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.updateFormControlTouchState = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    
  }

  public writeValue(ratingCount: number): void {
    
  }

}
