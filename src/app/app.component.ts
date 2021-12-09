import { Component } from '@angular/core';
import { StyleService } from './style.service';

@Component({
  selector: 'dcv-root',
  template: `
    <div class="background-secondary">
      <p class="color-primary">This is a styled section</p>
    </div>
    <input (click)="onChangeClick()" type="button" value="Change" />
  `,
  styles: [
    'div { align-items: center; display:flex; justify-content: center; min-height: 30vh; }',
    'p { font-size: 30px; font-weight: bold; }',
  ]
})
export class AppComponent {

  constructor(
    private styleService: StyleService,
  ) { }

  onChangeClick() {
    console.log(this.styleService.brandingPrimary);
    this.styleService.brandingPrimary = 'darkgray';
    this.styleService.brandingSecondary = 'cornflowerblue';
    console.log(this.styleService.brandingPrimary);
  }

}
