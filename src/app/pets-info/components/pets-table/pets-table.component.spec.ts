import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IPet } from '../../models/pet.model';
import { PetsTableComponent } from './pets-table.component';

function I18nHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `assets/i18n/`, '.json');
}

class MockRouter{
  navigateByUrl(){}
  navigate(){}
}

describe('PetsTableComponent', () => {
  let component: PetsTableComponent;
  let fixture: ComponentFixture<PetsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsTableComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        TranslateModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: I18nHttpLoaderFactory,
            deps: [HttpClient],
          },
        })
      ],
      providers: [
        { provide: Router, useClass: MockRouter},
        { provide: ActivatedRoute, useValue: {
          snapshot: {
            queryParamMap: convertToParamMap({
              criteria: 'name',
              direction: 'asc',
            })
          }
        } }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsTableComponent);
    component = fixture.componentInstance;
    component.pets = {
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnChanges', () => {
    component.ngOnChanges();
    expect(component).toBeTruthy();
  });

  it('should pets data is correct', () => {
    expect(component.pets.data.length).toBe(2);
    expect(component.pets.data[0].name).toBe('Snap');
    expect(component.pets.data[1].kind).toBe('dog');
  });

  it('should onPaginate emits', () => {
    spyOn(component.paginate, 'emit');
    component.onPaginate('https://www.link.com');
    expect(component.paginate.emit).toHaveBeenCalled();
  });

  it('should navigateToDetails when click on row', () => {
    const pet: IPet =  {
      description: "Lorem",
      height: 12,
      id: 12,
      kind: "dog",
      length: 90,
      name: "Red",
      number_of_lives: 5,
      photo_url: "https://cdn2.thecatapi.com/images/8k7.jpg",
      weight: 432
    };
    const router: Router = TestBed.inject(Router);
    spyOn(router, 'navigateByUrl');
    component.navigateToDetails(pet);
    expect(router.navigateByUrl).toHaveBeenCalledWith('details/12');
  });

  it('should sortData with direction', () => {
    const router: Router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    const sortObject: Sort = {active: 'name', direction: 'asc'};
    component.sortData(sortObject);
    expect(router.navigate).toHaveBeenCalled();
  });

  it('should sortData without direction', () => {
    const router: Router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    const sortObject: Sort = {active: 'name', direction: ''};
    component.sortData(sortObject);
    expect(router.navigate).toHaveBeenCalled();
  });
});
