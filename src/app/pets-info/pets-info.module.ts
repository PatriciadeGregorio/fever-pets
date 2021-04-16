import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetsInfoRoutingModule } from './pets-info-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    PetsInfoRoutingModule,
    TranslateModule.forChild()
  ]
})
export class PetsInfoModule { }
