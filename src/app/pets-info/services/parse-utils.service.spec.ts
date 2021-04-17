import { TestBed } from '@angular/core/testing';

import { ParseUtilsService } from './parse-utils.service';

describe('ParseUtilsService', () => {
  let service: ParseUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParseUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
