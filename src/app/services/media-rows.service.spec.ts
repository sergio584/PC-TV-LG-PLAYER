import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MediaRowsService } from './media-rows.service';

describe('MediaRowsService', () => {
  let service: MediaRowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(MediaRowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
