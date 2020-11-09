import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  shown: boolean;
  grey = false;

  constructor() { }

  ngOnInit(): void {
  }

  setShown(value){
    this.shown = value;
  }

  setGrey(){
    this.grey = !this.grey;
  }

}
