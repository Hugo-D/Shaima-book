import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';
import { IImage } from '../mock-data';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @HostBinding("style.--cellWidth")
  @Input()
  cellWidth: string = "12.5rem";

  @HostBinding("style.--cellHeight")
  @Input()
  cellHeight: string = "17.688rem";

  @Input()
  cellsToShow: number = 3;

  @Input()
  loop: boolean = false;

  @Input()
  data!: IImage[];

  displayedData!: IImage[];
  indiceDebut: number = 0;

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
    this.cellHeight = (eval(this.cellWidth.substring(0, this.cellWidth.length - 3)) * 3508 / 2480) + "rem";
    this.chargeCellsToShow();
  }

  chargeCellsToShow(): void {
    if (this.indiceDebut < 0) {
      this.displayedData = this.data.slice(this.indiceDebut).concat(this.data.slice(0, this.indiceDebut + this.cellsToShow));
    } else if (this.indiceDebut + this.cellsToShow > this.data.length) {
      this.displayedData = this.data.slice(this.indiceDebut, this.data.length).concat(this.data.slice(0, this.indiceDebut + this.cellsToShow - this.data.length));
    } else {
      this.displayedData = this.data.slice(this.indiceDebut, this.indiceDebut + this.cellsToShow);
    }
  }

  slideLeft(): void {
    if (this.indiceDebut + this.cellsToShow === 0) {
      this.indiceDebut = this.data.length - this.cellsToShow;
    }
    this.indiceDebut -= 1;
    this.chargeCellsToShow();
  }

  slideRight(): void {
    if (this.indiceDebut === this.data.length - 1) {
      this.indiceDebut = -1;
    }
    this.indiceDebut += 1;
    this.chargeCellsToShow();
  }

  openImage(item: IImage): void {
    this.dialog.open(ImageDialogComponent, {data: item});
  }

}
