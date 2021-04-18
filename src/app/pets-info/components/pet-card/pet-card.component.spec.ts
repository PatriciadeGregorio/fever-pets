import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetCardComponent } from './pet-card.component';

describe('PetCardComponent', () => {
  let component: PetCardComponent;
  let fixture: ComponentFixture<PetCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetCardComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetCardComponent);
    component = fixture.componentInstance;
    component.pet =  {
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
