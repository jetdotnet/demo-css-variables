import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  get brandingPrimary() {
    return getComputedStyle(this.document.documentElement)
      .getPropertyValue('--branding-primary');
  }

  set brandingPrimary(color: string) {
    this.document.documentElement.style.setProperty('--branding-primary', color);
    this.document.documentElement.style.setProperty('--kendo-list-item-selected-bg', color);
  }

  get brandingSecondary() {
    return getComputedStyle(this.document.documentElement)
      .getPropertyValue('--branding-secondary');
  }

  set brandingSecondary(color: string) {
    this.document.documentElement.style.setProperty('--branding-secondary', color);
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) { }

}
