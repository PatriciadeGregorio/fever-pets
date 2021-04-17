import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { MatSort, MatSortable, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IPet } from '../../models/pet.model';

interface ISortType {
  criteria: string;
  direction: string;
}

@Component({
  selector: 'app-pets-table',
  templateUrl: './pets-table.component.html',
  styleUrls: ['./pets-table.component.scss']
})
export class PetsTableComponent implements OnInit, OnChanges {
  @Input() pets: {data: Array<IPet>, links: {[key: string]: string}};
  @Output() paginate: EventEmitter<string> = new EventEmitter();
  @ViewChild(MatSort) sort: MatSort;
  public displayedColumns: string[] = ['photo_url', 'name', 'weight', 'height', 'length', 'kind'];
  public tablePets: MatTableDataSource<IPet>;
  public sortType: ISortType;


  constructor(private readonly router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initializeSortPets();
  }

  ngOnChanges(): void {
    this.initializeSortPets();
    this.sortPets();
  }

  ngAfterViewInit() {
    this.sortPets();
  }

  private sortPets(): void {
    this.tablePets.sort = this.sort;
  }

  private initializeSortPets(): void {
    this.sortType = {
      criteria: this.route.snapshot.queryParamMap.get('criteria'),
      direction: this.route.snapshot.queryParamMap.get('direction')
    };
    this.tablePets = new MatTableDataSource(this.pets.data);
  }

  public onPaginate(link: string) {
    this.paginate.emit(link);
  }

  public navigateToDetails(row: IPet): void {
    this.router.navigateByUrl(`details/${row.id}`);
  }

  public sortData({active, direction}: Sort): void {
    if (direction) {
      this.router.navigate(['.'], { relativeTo: this.route, queryParams: { criteria: active, direction}});
    } else {
      this.router.navigate(['.'], { relativeTo: this.route, queryParams: {}});
    }
  }

}

