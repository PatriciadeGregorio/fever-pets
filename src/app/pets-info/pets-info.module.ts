import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetsInfoRoutingModule } from './pets-info-routing.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PetsInfoRoutingModule,
    TranslateModule.forChild()
  ]
})
export class PetsInfoModule { }
