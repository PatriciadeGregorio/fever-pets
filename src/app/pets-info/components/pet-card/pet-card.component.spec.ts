import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getPet1 } from '../../test/utils.test';

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
    component.pet =  getPet1();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
