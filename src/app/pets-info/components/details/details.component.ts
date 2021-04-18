import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPet } from '../../models/pet.model';

enum EKind {
  DOG = 'dog',
  CAT = 'cat'
};

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public pet: IPet;

  constructor(private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.pet = this.activatedRoute.snapshot.data.pet;
  }

  public getHealth(): {label: string, color: string} {
    const healthlLevel: number = this.pet.weight/(this.pet.height * this.pet.length);
    const isUnhealthyCat: boolean = this.pet.kind === EKind.CAT && this.pet.number_of_lives === 1;
    const unhealthy: boolean = healthlLevel < 2 || healthlLevel > 5;
    const healthy: boolean = healthlLevel > 3 && healthlLevel < 5;
    const veryHealthy: boolean =  healthlLevel > 2 && healthlLevel < 3;

    if (isUnhealthyCat || unhealthy) {
      return {label: 'HEALTH_LEVEL.UNHEALTHY', color: 'info__health--unhealthy'};
    }
    if (healthy) {
      return {label: 'HEALTH_LEVEL.HEALTHY', color: 'info__health--healthy'};
    }
    return {label: 'HEALTH_LEVEL.VERY_HEALTHY', color: 'info__health--very-healthy'};
  }

}
