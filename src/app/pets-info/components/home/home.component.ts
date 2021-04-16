import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPet } from '../../models/pet.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public pets: Array<IPet>;

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pets = this.route.snapshot.data.pets;
  }

}
