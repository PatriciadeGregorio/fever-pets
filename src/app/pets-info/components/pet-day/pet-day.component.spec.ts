import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { IPet } from '../../models/pet.model';
import { PetsService } from '../../services/pets.service';
import { getPet1 } from '../../test/utils.test';

import { PetDayComponent } from './pet-day.component';

describe('PetDayComponent', () => {
  let component: PetDayComponent;
  let fixture: ComponentFixture<PetDayComponent>;
  let pet: IPet =  getPet1();

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
    const newPets = [];
    for (let i= 0; i<30; i++) {
      newPets.push(pet);
    }
    spyOn(TestBed.inject(PetsService), 'getPets').and.returnValue(of(
      {
        data: newPets
      }
    ));
    component.pets = newPets;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get pet of certain day', () => {
    const date = new Date('04/05/2021');
    component.getPetOfCertainDay({value: date});
    expect(component.petCertainDay.name).toBe('Snap');
  });
});
