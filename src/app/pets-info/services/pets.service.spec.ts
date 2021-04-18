import { inject, TestBed, waitForAsync } from '@angular/core/testing';
import { PetsService } from './pets.service';
import { HttpClientTestingModule, HttpTestingController,  } from '@angular/common/http/testing';
import { IPet } from '../models/pet.model';
import { ParseUtilsService } from './parse-utils.service';
import { getLinks, getPet1, getPet2 } from '../test/utils.test';


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
      data: [getPet1(), getPet2()],
      links: getLinks()
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
      
        spyOn(TestBed.inject(ParseUtilsService), 'parseLinkHeader').and.returnValue(getLinks());

      let req = httpMock.expectOne('https://my-json-server.typicode.com/Feverup/fever_pets_data/pets?_page=1');
      expect(req.request.method).toBe('GET');

      req.flush(pets);
      httpMock.verify();

    })));

    it(`should fetch pet as an Observable`, waitForAsync(inject([PetsService],
      (petsService: PetsService) => {

        const pet = getPet1();
      
        petsService.getPetsById('1')
          .subscribe((pet: IPet) => {
            expect(pet.number_of_lives).toBe(7);
          });
        
  
        let req = httpMock.expectOne('https://my-json-server.typicode.com/Feverup/fever_pets_data/pets/1');
        expect(req.request.method).toBe('GET');
  
        req.flush(pet);
        httpMock.verify();
  
      })));
});
