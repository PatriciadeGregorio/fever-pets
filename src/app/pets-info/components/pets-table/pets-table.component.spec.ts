import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PetsTableComponent } from './pets-table.component';

function I18nHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `assets/i18n/`, '.json');
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
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pets data is correct', () => {
    component.pets = [
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
    ]
    expect(component.pets.length).toBe(2);
    expect(component.pets[0].name).toBe('Snap');
    expect(component.pets[1].kind).toBe('dog');

  });
});
