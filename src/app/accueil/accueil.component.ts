import { Component, OnInit } from '@angular/core';
import { DataMockService } from '../data-mock.service';
import { ICollection, IImage } from '../mock-data';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  couverture!: IImage;
  logo!: IImage;
  collections: ICollection[] = [];
  citation!: string;

  constructor(private dataMockService:DataMockService) { }

  ngOnInit(): void {
    this.getCouverture();
    this.getLogo();
    this.getImagesCategories();
    this.getCitation();
  }

  getCouverture(): void {
    this.dataMockService.getBandeauHeader().subscribe(image => this.couverture = image);
  }

  getLogo(): void {
    this.dataMockService.getLogo().subscribe(logo => this.logo = logo);
  }

  getImagesCategories():void {
    this.dataMockService.getCategories().subscribe(categories => categories.forEach(c =>
      this.dataMockService.getImagesCategorie(c.tag).subscribe(images => this.collections.push({ categorie: c, images: images }))));
  }

  getCitation(): void {
    this.dataMockService.getCitation().subscribe(citation => this.citation = citation);
  }

}
