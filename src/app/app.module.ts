import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import { ContactComponent } from './contact/contact.component';
import { ImageComponent } from './image/image.component';
import { ImagesComponent } from './images/images.component';
import {ToggleModule} from "./toggle/toggle.module"


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ImageComponent,
    ImagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
