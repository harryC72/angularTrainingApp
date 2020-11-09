import { NgModule } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';





@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule, MatCardModule, MatSlideToggleModule]
})
export class MaterialModule { }
