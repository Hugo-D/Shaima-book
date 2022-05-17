import { Component, OnInit } from '@angular/core';
import { DataMockService } from '../data-mock.service';
import { IImage } from '../entities/IImage';

@Component({
  selector: 'app-portfoliot',
  templateUrl: './portfoliot.component.html',
  styleUrls: ['./portfoliot.component.scss']
})
export class PortfoliotComponent implements OnInit {

  images!:IImage[];

  constructor(private dataMockService:DataMockService) { }

  ngOnInit(): void {
    this.getPortfoliot();
  }

  getPortfoliot(): void {
    this.dataMockService.getPortfoliot().subscribe(images => this.images = images);
  }

}
