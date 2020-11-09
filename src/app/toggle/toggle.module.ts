import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToggleComponent } from './toggle.component';
import { ToggleOnComponent } from './toggle.on.component';
import { ToggleOffComponent } from './toggle.off.component';
import { ToggleButtonComponent } from './toggle.button.component';
import {MaterialModule} from "../material/material.module"

@NgModule({
  declarations: [
    ToggleComponent,
    ToggleButtonComponent,
    ToggleOffComponent,
    ToggleOnComponent,
  ],
  imports: [ CommonModule, MaterialModule ],
  exports: [
    ToggleComponent,
    ToggleButtonComponent,
    ToggleOffComponent,
    ToggleOnComponent,
  ],
})
export class ToggleModule {}