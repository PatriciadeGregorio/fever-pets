import { Component, Input, OnInit } from '@angular/core';
import { IPet } from '../../models/pet.model';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss']
})
export class PetCardComponent implements OnInit {
  @Input() pet: IPet;

  constructor() { }

  ngOnInit(): void {
  }

}
