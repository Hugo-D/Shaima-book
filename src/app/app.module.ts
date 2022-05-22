import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccueilComponent } from './accueil/accueil.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CarouselComponent,
    ImageDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
