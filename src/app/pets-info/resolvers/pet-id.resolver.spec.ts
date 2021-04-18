import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, ActivatedRouteSnapshot, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { IPet } from '../models/pet.model';
import { PetsService } from '../services/pets.service';
import { getPet1 } from '../test/utils.test';

import { PetIdResolver } from './pet-id.resolver';

describe('PetIdResolver', () => {
  let resolver: PetIdResolver;
  let route: ActivatedRouteSnapshot;
  let petService: PetsService;
  let pet: IPet;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    resolver = TestBed.inject(PetIdResolver);
    route = {params: {id: '1'}} as any;
    petService = TestBed.inject(PetsService);
    pet = getPet1();
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should be resolved with correct data', () => {
    spyOn(petService, 'getPetsById').and.returnValue(of(pet));
    resolver.resolve(route, null).subscribe(pets => {
      expect(pets.number_of_lives).toBeTruthy(7);
      expect(pets.name).toBeTruthy('Snap');
      expect(pets.kind).toBeTruthy('cat');
    });
  });
});
