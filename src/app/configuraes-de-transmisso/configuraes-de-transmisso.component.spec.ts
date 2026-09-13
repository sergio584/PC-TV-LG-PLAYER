import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IgxButtonDirective, IgxSwitchComponent } from 'igniteui-angular';
import { ConfiguraesDeTransmissoComponent } from './configuraes-de-transmisso.component';

describe('ConfiguraesDeTransmissoComponent', () => {
  let component: ConfiguraesDeTransmissoComponent;
  let fixture: ComponentFixture<ConfiguraesDeTransmissoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfiguraesDeTransmissoComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IgxButtonDirective, IgxSwitchComponent]
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
