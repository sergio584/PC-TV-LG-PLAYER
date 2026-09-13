import { Routes } from '@angular/router';

import { MasterViewComponent } from './master-view.component';
import { ConfiguraesDeTransmissoComponent } from './configuraes-de-transmisso/configuraes-de-transmisso.component';

export const routes: Routes = [
  { path: '', component: MasterViewComponent, children: [
      { path: '', redirectTo: 'configuraes-de-transmisso', pathMatch: 'full' },
      { path: 'configuraes-de-transmisso', component: ConfiguraesDeTransmissoComponent, data: { text: 'Configuraes-De-Transmisso' } },
    ]
  },
];
