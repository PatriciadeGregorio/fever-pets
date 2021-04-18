import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { PetsService } from '../../services/pets.service';

import { PetDayComponent } from './pet-day.component';

describe('PetDayComponent', () => {
  let component: PetDayComponent;
  let fixture: ComponentFixture<PetDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetDayComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [ HttpClientTestingModule, TranslateModule.forRoot({}) ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetDayComponent);
    component = fixture.componentInstance;
    spyOn(TestBed.inject(PetsService), 'getPets').and.returnValue(of(
      {
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
        ]
      }
    ))
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
