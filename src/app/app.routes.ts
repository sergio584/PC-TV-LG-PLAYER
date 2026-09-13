import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { PlayerDeMdiaComponent } from './player-de-mdia/player-de-mdia.component';

export const routes: Routes = [
  { path: '', redirectTo: 'master-view', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'master-view', loadChildren: () => import('./master-view/master-view.routes').then(m => m.routes), data: { text: 'Master-View' } },
  { path: 'player-de-mdia', component: PlayerDeMdiaComponent, data: { text: 'Player-De-Mdia' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
