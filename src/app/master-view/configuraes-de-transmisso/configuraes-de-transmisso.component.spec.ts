import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IGX_BANNER_DIRECTIVES, IgxButtonDirective, IgxSwitchComponent, IGX_ACCORDION_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES } from 'igniteui-angular';
import { ConfiguraesDeTransmissoComponent } from './configuraes-de-transmisso.component';

describe('ConfiguraesDeTransmissoComponent', () => {
  let component: ConfiguraesDeTransmissoComponent;
  let fixture: ComponentFixture<ConfiguraesDeTransmissoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfiguraesDeTransmissoComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IGX_BANNER_DIRECTIVES, IgxButtonDirective, IgxSwitchComponent, IGX_ACCORDION_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguraesDeTransmissoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
