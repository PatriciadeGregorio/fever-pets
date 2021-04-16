import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IPet } from '../../models/pet.model';

@Component({
  selector: 'app-pets-table',
  templateUrl: './pets-table.component.html',
  styleUrls: ['./pets-table.component.scss']
})
export class PetsTableComponent implements OnInit {
  @Input() pets: Array<IPet>;
  public displayedColumns: string[] = ['photo_url', 'name', 'weight', 'height', 'length', 'kind'];
  public pageSizeOptions: Array<number> = [5, 10];
  public tablePets: MatTableDataSource<IPet>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor() { }

  ngOnInit(): void {
    this.tablePets = new MatTableDataSource(this.pets);
  }

  ngAfterViewInit() {
    this.tablePets.sort = this.sort;
    this.tablePets.paginator = this.paginator;
  }

}

