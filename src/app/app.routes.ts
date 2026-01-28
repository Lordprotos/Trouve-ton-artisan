import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ArtisanList } from './artisan-list/artisan-list';
import { ArtisanDetail } from './artisan-detail/artisan-detail';
import { PageNotFound } from './page-not-found/page-not-found';
import { MentionsLegales } from './pages/mentions-legales/mentions-legales';
import { Accessibilite } from './pages/accessibilite/accessibilite';
import { Cookies } from './pages/cookies/cookies';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'artisans', component: ArtisanList },
  { path: 'artisan/:id', component: ArtisanDetail },
  { path: 'mentions-legales', component: MentionsLegales },
  { path: 'accessibilite', component: Accessibilite },
  { path: 'cookies', component: Cookies },
  { path: '**', component: PageNotFound }
];
