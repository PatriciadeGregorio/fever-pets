import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { of, throwError } from 'rxjs';
import { IPet } from '../models/pet.model';
import { PetsService } from '../services/pets.service';

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
      data: [
        {
          description: "I hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food but meow",
          height: 26,
          id: 6,
          kind: "cat",
          length: 50,
          name: "Snap",
          number_of_lives: 7,
          photo_url: "https://cdn2.thecatapi.com/images/8k7.jpg",
          weight: 4623
        }
      ],
      links: {
        prev: 'https://linkPrev.com',
        next: 'https://linkNext.com',
        first: 'https://linkFirst.com',
        last: 'https://linkLast.com',
      }
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
