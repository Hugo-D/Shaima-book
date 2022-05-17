import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfoliotComponent } from './portfoliot/portfoliot.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemImageComponent } from './item-image/item-image.component';
import { AboutComponent } from './about/about.component';
import { CreationComponent } from './creation/creation.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfoliotComponent,
    AccueilComponent,
    AboutComponent,
    NotFoundComponent,
    HeaderComponent,
    ItemImageComponent,
    CreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule,
    MatTooltipModule,

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
