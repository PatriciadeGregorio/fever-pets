import { inject, TestBed, waitForAsync } from '@angular/core/testing';
import { PetsService } from './pets.service';
import { HttpClientTestingModule, HttpTestingController,  } from '@angular/common/http/testing';
import { IPet } from '../models/pet.model';
import { ParseUtilsService } from './parse-utils.service';


describe('PetsService', () => {
  let service: PetsService;
  let pets: { data: Array<IPet>, links: {[key: string]: string} };
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
    });
    service = TestBed.inject(PetsService);
    httpMock = TestBed.inject(HttpTestingController);
    pets = {
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
        },
        {
          description: "Lorem",
          height: 12,
          id: 12,
          kind: "dog",
          length: 90,
          name: "Red",
          number_of_lives: 5,
          photo_url: "https://cdn2.thecatapi.com/images/8k7.jpg",
          weight: 432
        }
      ],
      links: {
        prev: 'https://linkPrev.com',
        next: 'https://linkNext.com',
        first: 'https://linkFirst.com',
        last: 'https://linkLast.com',
      }
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it(`should fetch pets as an Observable`, waitForAsync(inject([PetsService],
    (petsService: PetsService) => {
    

      petsService.getPets()
        .subscribe((pets) => {
          expect(pets.data.data.length).toBe(2);
        });
      
        spyOn(TestBed.inject(ParseUtilsService), 'parseLinkHeader').and.returnValue({
          prev: 'https://linkPrev.com',
          next: 'https://linkNext.com',
          first: 'https://linkFirst.com',
          last: 'https://linkLast.com',
        });

      let req = httpMock.expectOne('https://my-json-server.typicode.com/Feverup/fever_pets_data/pets?_page=1');
      expect(req.request.method).toBe('GET');

      req.flush(pets);
      httpMock.verify();

    })));
});
