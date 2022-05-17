import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { DataMockService } from '../data-mock.service';
import { IImage } from '../entities/IImage';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss']
})
export class CreationComponent implements OnInit {

  creation!:IImage;

  constructor(private dataMockService:DataMockService, private route:ActivatedRoute, private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id: number = +(params.get('id') as string);
      (id) ? this.getDataById(id) : this.pushErreurId(id);
    })
  }

  getDataById(id: number): void {
    this.dataMockService.getCreation(id).subscribe(image => (image) ? this.creation = image : this.pushErreurId(id));
  }

  pushErreurId(id: number): void {
    console.error("L'identifiant %i est introuvable", id);
    this.snackBar.open("La création est introuvable", "compris", {duration: 2500});
  }

}
