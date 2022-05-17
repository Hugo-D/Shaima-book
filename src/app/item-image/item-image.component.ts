import { Component, Input, OnInit } from '@angular/core';
import { IImage } from '../entities/IImage';

@Component({
  selector: 'app-item-image',
  templateUrl: './item-image.component.html',
  styleUrls: ['./item-image.component.scss']
})
export class ItemImageComponent implements OnInit {

  @Input()
  data!:IImage;

  constructor() { }

  ngOnInit(): void {
  }

}
