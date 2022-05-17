import { Component, OnInit } from '@angular/core';
import { DataMockService } from '../data-mock.service';
import { IImage } from '../entities/IImage';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  couverture!: IImage;
  imagesPresentation!: IImage[];

  constructor(private dataMockService:DataMockService) { }

  ngOnInit(): void {
    this.getImageAccueil();
    this.getImagesPresentation();
  }

  getImageAccueil():void {
    this.dataMockService.getAccueil().subscribe(image => this.couverture = image);
  }

  getImagesPresentation():void {
    this.dataMockService.getPortfoliot(3).subscribe(images => this.imagesPresentation = images);
  }

}
