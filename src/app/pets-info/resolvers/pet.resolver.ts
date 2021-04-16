import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { IPet } from '../models/pet.model';
import { PetsService } from '../services/pets.service';

@Injectable({
  providedIn: 'root'
})
export class PetResolver implements Resolve<IPet> {
  constructor(private readonly petService: PetsService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPet> {
    return this.petService.getPets();
  }
}
