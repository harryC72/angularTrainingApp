import { Component, Input, Output, EventEmitter, Directive } from '@angular/core';

@Directive({
  exportAs: 'toggle',
  selector: 'toggle,[toggle]',
})
export class ToggleDirective {
  @Input() checked: boolean;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();

  setOnState(checked: boolean) {
    this.checked = checked;
    this.toggle.emit(this.checked);
  }
}

