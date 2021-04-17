import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetsInfoRoutingModule } from './pets-info-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PetsTableComponent } from './components/pets-table/pets-table.component';
import { TablePaginationComponent } from './components/table-pagination/table-pagination.component';



@NgModule({
  declarations: [
    HomeComponent,
    PetsTableComponent,
    TablePaginationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    PetsInfoRoutingModule,
    TranslateModule.forChild()
  ]
})
export class PetsInfoModule { }
