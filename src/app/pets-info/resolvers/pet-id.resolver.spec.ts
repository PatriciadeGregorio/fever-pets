import { TestBed } from '@angular/core/testing';

import { PetIdResolver } from './pet-id.resolver';

describe('PetIdResolver', () => {
  let resolver: PetIdResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PetIdResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
