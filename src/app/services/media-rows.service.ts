import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MediaContentType } from '../models/media-rows/media-content-type';
import { MediaRows } from '../static-data/media-rows';

@Injectable({
  providedIn: 'root'
})
export class MediaRowsService {
  public getMediaContent(): Observable<MediaContentType[]> {
    return of(MediaRows['MediaContentType']);
  }
}
