import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetsInfoRoutingModule } from './pets-info-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { PetsTableComponent } from './components/pets-table/pets-table.component';
import { TablePaginationComponent } from './components/table-pagination/table-pagination.component';
import { DetailsComponent } from './components/details/details.component';
import { PetDayComponent } from './components/pet-day/pet-day.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { PetCardComponent } from './components/pet-card/pet-card.component';






@NgModule({
  declarations: [
    HomeComponent,
    PetsTableComponent,
    TablePaginationComponent,
    DetailsComponent,
    PetDayComponent,
    PetCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    PetsInfoRoutingModule,
    TranslateModule.forChild()
  ],
  providers: [  {provide: MAT_DATE_LOCALE, useValue: 'es-ES'},]
})
export class PetsInfoModule { }
