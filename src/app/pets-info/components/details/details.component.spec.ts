import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],
      imports: [ TranslateModule.forRoot()],
      providers: [
        { provide: ActivatedRoute, useValue: {
          snapshot: {
            data: {
              pet: {
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
            }
          }
        }
      }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getHealth very healthy', () => {
    component.pet.weight = 25;
    component.pet.height = 4;
    component.pet.length = 2.5;
    expect(component.getHealth().label).toBe('HEALTH_LEVEL.VERY_HEALTHY');
  });

  it('should getHealth unhealthy being cat', () => {
    component.pet.kind = 'cat';
    component.pet.number_of_lives = 1;
    expect(component.getHealth().label).toBe('HEALTH_LEVEL.UNHEALTHY');
  });

  it('should getHealth healthy', () => {
    component.pet.weight = 16;
    component.pet.height = 2;
    component.pet.length = 2.;
    expect(component.getHealth().label).toBe('HEALTH_LEVEL.HEALTHY');
  });
});
