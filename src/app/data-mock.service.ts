import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CATEGORIE, CITATION, ICategorie, IImage, IMAGE, TAG } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class DataMockService {

  constructor() { }

  getImages(): Observable<IImage[]> {
    return of(IMAGE);
  }

  getBandeauHeader(): Observable<IImage> {
    return of(IMAGE.find(i => i.tag === TAG.BANNIERE) as IImage);
  }

  getLogo(): Observable<IImage> {
    return of(IMAGE.find(i => i.tag === TAG.LOGO) as IImage);
  }

  getImagesCategorie(categorie: TAG): Observable<IImage[]> {
    return of(IMAGE.filter(i => i.tag === categorie));
  }

  getCreation(id: number): Observable<IImage> {
    return of(IMAGE.find(i => i.id === id) as IImage);
  }

  getCategories(): Observable<ICategorie[]> {
    return of(CATEGORIE);
  }

  getCategorie(tag: TAG): Observable<ICategorie> {
    return of(CATEGORIE.find(c => c.tag === tag) as ICategorie);
  }

  getCitation(): Observable<string> {
    return of(CITATION);
  }

}
