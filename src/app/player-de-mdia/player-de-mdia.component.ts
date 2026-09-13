import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_BUTTON_GROUP_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxBadgeComponent, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { MediaContentType } from '../models/media-rows/media-content-type';
import { MediaRowsService } from '../services/media-rows.service';

@Component({
  selector: 'app-player-de-mdia',
  imports: [IGX_BUTTON_GROUP_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxBadgeComponent, FormsModule],
  templateUrl: './player-de-mdia.component.html',
  styleUrls: ['./player-de-mdia.component.scss']
})
export class PlayerDeMdiaComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public value?: string;
  public mediaRowsMediaContent: MediaContentType[] = [];

  constructor(
    public mediaRowsService: MediaRowsService,
  ) {}


  ngOnInit() {
    this.mediaRowsService.getMediaContent().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.mediaRowsMediaContent = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
