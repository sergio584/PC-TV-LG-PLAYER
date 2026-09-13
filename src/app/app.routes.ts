import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { PlayerDeMdiaComponent } from './player-de-mdia/player-de-mdia.component';
import { ConfiguraesDeTransmissoComponent } from './configuraes-de-transmisso/configuraes-de-transmisso.component';

export const routes: Routes = [
  { path: '', redirectTo: 'player-de-mdia', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'player-de-mdia', component: PlayerDeMdiaComponent, data: { text: 'Player-De-Mdia' } },
  { path: 'configuraes-de-transmisso', component: ConfiguraesDeTransmissoComponent, data: { text: 'Configuraes-De-Transmisso' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
