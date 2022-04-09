import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mn-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  host: {
    class: "icon-image"
  }
})
export class IconComponent implements OnInit {

  @Input()
  public iconName: "close" | "star" | null = null;

  constructor() { }

  ngOnInit(): void {
    if (this.iconName === null) {
      throw new TypeError('"iconNme" is required input parameter')
    }
  }

}
