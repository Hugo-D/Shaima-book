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

}
