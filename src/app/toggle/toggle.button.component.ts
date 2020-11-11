import { Component } from '@angular/core';
import { ToggleProviderDirective } from './toggle.toggleProvider.directive';

@Component({
  selector: 'toggle-button',
  template: '<mat-slide-toggle [checked]="toggleProvider.toggle.checked" (click)="onChange()" ></mat-slide-toggle>',
})
export class ToggleButtonComponent  {
  constructor(public toggleProvider: ToggleProviderDirective){}
  onChange(){
    this.toggleProvider.toggle.setOnState(!this.toggleProvider.toggle.checked);
  }
}