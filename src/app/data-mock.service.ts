import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IImage } from './entities/IImage';
import { IMAGE } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class DataMockService {

  constructor() { }

  getAll(): Observable<IImage[]> {
    return of(IMAGE);
  }

  getAccueil(): Observable<IImage> {
    return of(IMAGE.filter(i => i.tag === "accueil")[0]);
  }

  getPortfoliot(quantite?: number): Observable<IImage[]> {
    let images: IImage[] = IMAGE.filter(i => i.tag === "portfoliot");
    return of((quantite && quantite <= images.length) ? images.slice(0, quantite) : images);
  }

  getCreation(id: number): Observable<IImage> {
    return of(IMAGE.find(i => i.id === id) as IImage);
  }

}
