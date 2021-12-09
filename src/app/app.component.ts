import { Component } from '@angular/core';
import { StyleService } from './style.service';

@Component({
  selector: 'dcv-root',
  template: `
    <div class="background-secondary styled">
      <p class="color-primary">This is a styled section</p>
    </div>
    <div>
      <input (click)="onChangeClick()" type="button" value="Change Colors" />
      <kendo-dropdownlist [data]="dropDownItems"></kendo-dropdownlist>
    </div>
  `,
  styles: [
    '.styled { align-items: center; display:flex; justify-content: center; min-height: 30vh; }',
    'p { font-size: 30px; font-weight: bold; }',
  ]
})
export class AppComponent {

  dropDownItems = [
    'one',
    'two',
    'three',
  ];

  constructor(
    private styleService: StyleService,
  ) { }

  onChangeClick() {
    console.log(this.styleService.brandingPrimary);
    this.styleService.brandingPrimary = 'black';
    this.styleService.brandingSecondary = 'cornflowerblue';
    console.log(this.styleService.brandingPrimary);
  }

}
