import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PetsTableComponent } from '../pets-table/pets-table.component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [ HomeComponent, PetsTableComponent ],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          snapshot: { data: {pets: [
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
          ]}}
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
    expect(component.pets.length).toBe(2);
    expect(component.pets[0].height).toBe(26);
    expect(component.pets[0].kind).toBe('cat');

  });
});
