import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Output() toggled: EventEmitter<boolean> = new EventEmitter();
  @Input() grey: boolean;
  show = true;
  imageSrc: string;
  
  

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.show = !this.show;
    this.toggled.emit(this.show);
  }

}
