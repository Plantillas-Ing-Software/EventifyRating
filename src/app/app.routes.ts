import { Routes } from '@angular/router';
import {HomeComponent} from './public/pages/home/home.component';
import {RatingCheckedComponent} from './registration/components/rating-checked/rating-checked.component';
import {PageNotFoundComponent} from './public/pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'home',             component: HomeComponent },
  {path:'engagement/ratings/new',component:RatingCheckedComponent},
  { path: '',                 redirectTo: 'home', pathMatch: 'full' },
  { path: '**',               component: PageNotFoundComponent }
];
