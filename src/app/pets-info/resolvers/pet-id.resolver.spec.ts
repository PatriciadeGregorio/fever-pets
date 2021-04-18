import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, ActivatedRouteSnapshot, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { IPet } from '../models/pet.model';
import { PetsService } from '../services/pets.service';

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
    pet = {
      description: "I hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food but meow",
      height: 26,
      id: 6,
      kind: "cat",
      length: 50,
      name: "Snap",
      number_of_lives: 7,
      photo_url: "https://cdn2.thecatapi.com/images/8k7.jpg",
      weight: 4623
    };
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
