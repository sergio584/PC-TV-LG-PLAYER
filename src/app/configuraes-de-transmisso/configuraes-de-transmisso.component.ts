import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxSwitchComponent } from 'igniteui-angular';

@Component({
  selector: 'app-configuraes-de-transmisso',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IgxButtonDirective, IgxSwitchComponent, FormsModule],
  templateUrl: './configuraes-de-transmisso.component.html',
  styleUrls: ['./configuraes-de-transmisso.component.scss']
})
export class ConfiguraesDeTransmissoComponent {
  public value = '8080';
  public value1 = '192.168.1.100';
  public checked = true;
  public checked1 = true;
  public checked2 = true;
}
