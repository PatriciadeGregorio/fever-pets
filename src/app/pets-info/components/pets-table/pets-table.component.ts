import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IPet } from '../../models/pet.model';

@Component({
  selector: 'app-pets-table',
  templateUrl: './pets-table.component.html',
  styleUrls: ['./pets-table.component.scss']
})
export class PetsTableComponent implements OnInit, OnChanges {
  @Input() pets: {data: Array<IPet>, links: any};
  @Output() paginate: EventEmitter<string> = new EventEmitter();
  public displayedColumns: string[] = ['photo_url', 'name', 'weight', 'height', 'length', 'kind'];
  public tablePets: MatTableDataSource<IPet>;
  @ViewChild(MatSort) sort: MatSort;


  constructor() { }

  ngOnInit(): void {
    this.tablePets = new MatTableDataSource(this.pets.data);
  }

  ngOnChanges(): void {
    this.tablePets = new MatTableDataSource(this.pets.data);
  }

  ngAfterViewInit() {
    this.tablePets.sort = this.sort;
  }

  public onPaginate(link: string) {
    this.paginate.emit(link);
  }

}

