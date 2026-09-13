import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IgxButtonDirective, IgxIconComponent, IGX_INPUT_GROUP_DIRECTIVES, IGX_BUTTON_GROUP_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxBadgeComponent } from 'igniteui-angular';
import { PlayerDeMdiaComponent } from './player-de-mdia.component';

describe('PlayerDeMdiaComponent', () => {
  let component: PlayerDeMdiaComponent;
  let fixture: ComponentFixture<PlayerDeMdiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerDeMdiaComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule, IgxButtonDirective, IgxIconComponent, IGX_INPUT_GROUP_DIRECTIVES, IGX_BUTTON_GROUP_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxBadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerDeMdiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
