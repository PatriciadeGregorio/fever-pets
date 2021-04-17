import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPet } from '../../models/pet.model';
import { PetsService } from '../../services/pets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public pets: {data: Array<IPet>, links: {[key: string]: string}};

  constructor(private readonly route: ActivatedRoute, private readonly petsService: PetsService) { }

  ngOnInit(): void {
    this.pets = this.route.snapshot.data.pets;
  }

  public onPaginate(link: string) {
    this.petsService.getPets(link).subscribe((resp: {data: Array<IPet>, links: {[key: string]: string}}) => {
      this.pets = resp;
    });
  }

}
