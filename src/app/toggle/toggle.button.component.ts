import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'toggle-button',
  template: '<mat-slide-toggle [checked]="checked" (click)="onChange()" ></mat-slide-toggle>',
})
export class ToggleButtonComponent  {
  @Input() checked: boolean;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();
  onChange(){
    this.checked = !this.checked;
    this.toggle.emit(this.checked);
  }
}