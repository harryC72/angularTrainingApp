import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  shown = false;
  grey = false;

  constructor() { }

  ngOnInit(): void {
  }

  setShown(value){
    this.shown = value;
  }

  toggleShown(){
    this.shown = !this.shown;
  }

  setGrey(){
    this.grey = !this.grey;
  }

}
