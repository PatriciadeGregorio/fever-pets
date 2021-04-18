import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { PetsService } from '../../services/pets.service';
import { getLinks, getPet1, getPet2 } from '../../test/utils.test';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        HttpClientModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HomeComponent],
      providers: [{
        provide: ActivatedRoute, useValue: {
          snapshot: {
            data: {
              pets: {
                data:
                  [getPet1(), getPet2()],
                links: getLinks()
              }
            }
          }
        }
      }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize pets', () => {
    expect(component.pets.data.length).toBe(2);
    expect(component.pets.data[0].height).toBe(26);
    expect(component.pets.data[0].kind).toBe('cat');
  });

  it('should paginates', () => {
    spyOn(TestBed.inject(PetsService), 'getPets').and.returnValue(of({
      data:
        [getPet1(), getPet2()],
      links: getLinks()
    }));
    component.onPaginate('https://link.com');
    expect(component.pets.data.length).toBe(2);
  });
});
