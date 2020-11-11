import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Output() toggled: EventEmitter<boolean> = new EventEmitter();
  @Input() grey: boolean;
  @Input() shown = true;
  imageSrc: string;
  
  

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.shown = !this.shown;
    this.toggled.emit(this.shown);
  }

}
