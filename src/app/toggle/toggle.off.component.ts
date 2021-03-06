import { Component, Input } from '@angular/core';
import { ToggleProviderDirective } from './toggle.toggleProvider.directive';

@Component({
  selector: 'toggle-off',
  template: '<ng-content *ngIf="!toggleProvider.toggle.checked"></ng-content>',
})
export class ToggleOffComponent  {
  constructor(public toggleProvider: ToggleProviderDirective){}
}