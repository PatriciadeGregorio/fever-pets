import { Component, OnInit } from '@angular/core';
import { IPet } from '../../models/pet.model';
import { PetsService } from '../../services/pets.service';
import * as moment from 'moment';

@Component({
  selector: 'app-pet-day',
  templateUrl: './pet-day.component.html',
  styleUrls: ['./pet-day.component.scss']
})
export class PetDayComponent implements OnInit {
  private readonly MAX_MONTH_DAYS: number = 31;
  public petDay: IPet;
  public petCertainDay: IPet;
  public pets: Array<IPet>;

  constructor(private readonly petsService: PetsService) { }

  ngOnInit(): void {
    this.getPets();
  }

  private getPets(): void {
    const link: string = this.petsService.getCompleteRoute();
    this.petsService.getPets(link).subscribe(({data}) => {
      this.pets = data;
      this.getPetOfDay();
    });
  }

  private getMonthDay(date?: Date): number {
    let momentDate = moment();
    if (date) {
      momentDate = moment(date);
    }
    return momentDate.date();
  }

  public getPetOfDay(): void {
    if (this.pets.length <= this.MAX_MONTH_DAYS) {
      const id: number = this.getMonthDay() % this.pets.length;
      this.petDay = this.pets.find((pet: IPet) => pet.id === id);
    }
  }

  public getPetOfCertainDay({value}): void {
    const day: number = this.getMonthDay(value);
    if (this.pets.length <= this.MAX_MONTH_DAYS) {
      const id: number = (day % this.pets.length) + 1;
      this.petCertainDay = this.pets.find((pet: IPet) => pet.id === id);
    }
  }

}
