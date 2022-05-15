import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PortfoliotComponent } from './portfoliot/portfoliot.component';

const routes: Routes = [
  {
    path: 'accueil',
    component: AccueilComponent
  },
  {
    path: 'portfoliot',
    component: PortfoliotComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
