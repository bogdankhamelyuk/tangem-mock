import { TestBed } from '@angular/core/testing';

import { BottomBarStorageService } from './bottom-bar-storage.service';

describe('BottomBarStorageService', () => {
  let service: BottomBarStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BottomBarStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
