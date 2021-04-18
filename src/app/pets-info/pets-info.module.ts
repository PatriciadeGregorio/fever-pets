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
import { DetailsComponent } from './components/details/details.component';
import { PetDayComponent } from './components/pet-day/pet-day.component';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [
    HomeComponent,
    PetsTableComponent,
    TablePaginationComponent,
    DetailsComponent,
    PetDayComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
    PetsInfoRoutingModule,
    TranslateModule.forChild()
  ]
})
export class PetsInfoModule { }
