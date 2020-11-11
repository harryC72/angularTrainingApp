import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleDirective } from './toggle.directive';
import { ToggleOnComponent } from './toggle.on.component';
import { ToggleOffComponent } from './toggle.off.component';
import { ToggleButtonComponent } from './toggle.button.component';
import {MaterialModule} from "../material/material.module";
import { ToggleProviderDirective } from './toggle.toggleProvider.directive';


@NgModule({
  declarations: [
    ToggleDirective,
    ToggleButtonComponent,
    ToggleOffComponent,
    ToggleOnComponent,
    ToggleProviderDirective
  ],
  imports: [ CommonModule, MaterialModule ],
  exports: [
    ToggleDirective,
    ToggleButtonComponent,
    ToggleOffComponent,
    ToggleOnComponent,
    ToggleProviderDirective
  ],
})
export class ToggleModule {}