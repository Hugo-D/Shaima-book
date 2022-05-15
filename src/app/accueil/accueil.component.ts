import { Component, Input, OnInit } from '@angular/core';
import { DataMockService } from '../data-mock.service';
import { IImage } from '../entities/IImage';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  @Input()
  image!: IImage;

  constructor(private dataMockService:DataMockService) { }

  ngOnInit(): void {
    this.getImageAccueil();
  }

  getImageAccueil():void {
    this.dataMockService.getAccueil().subscribe(image => this.image = image);
  }

}
