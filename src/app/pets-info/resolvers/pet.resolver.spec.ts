import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { of, throwError } from 'rxjs';
import { IPet } from '../models/pet.model';
import { PetsService } from '../services/pets.service';
import { getLinks, getPet1 } from '../test/utils.test';

import { PetResolver } from './pet.resolver';

describe('PetResolver', () => {
  let resolver: PetResolver;
  let route: ActivatedRouteSnapshot;
  let petService: PetsService;
  let pet: {data: Array<IPet>, links: {[key: string]: string}};


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    resolver = TestBed.inject(PetResolver);
    route = new ActivatedRouteSnapshot();
    petService = TestBed.inject(PetsService);
    pet = {
      data: [getPet1()],
      links: getLinks()
    }
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should be resolved with correct data', () => {
    spyOn(petService, 'getPets').and.returnValue(of(pet));
    resolver.resolve(route, null).subscribe(pets => {
      expect(pets.data[0].number_of_lives).toBeTruthy(7);
      expect(pets.data[0].name).toBeTruthy('Snap');
      expect(pets.data[0].kind).toBeTruthy('cat');
    });
  });

});
