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

  it('should parseLinkHeader', () => {
    const linkHeaders: string = '<http://my-json-server.typicode.com/Feverup/fever_pets_data/pets?_page=1>; rel="first", <http://my-json-server.typicode.com/Feverup/fever_pets_data/pets?_page=2>; rel="next", <http://my-json-server.typicode.com/Feverup/fever_pets_data/pets?_page=3>; rel="last"';
    const call: {[key: string]: string} = service.parseLinkHeader(linkHeaders);
    expect(call.first).toBe('http://my-json-server.typicode.com/Feverup/fever_pets_data/pets?_page=1');
    expect(call.next).toBe('http://my-json-server.typicode.com/Feverup/fever_pets_data/pets?_page=2');
    expect(call.last).toBe('http://my-json-server.typicode.com/Feverup/fever_pets_data/pets?_page=3');
  });
});
