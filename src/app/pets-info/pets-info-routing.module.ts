import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PetResolver } from './resolvers/pet.resolver';
import { PetsService } from './services/pets.service';

const routes: Routes = [
  { path: '', component: HomeComponent, resolve: {pets: PetResolver}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetsInfoRoutingModule { }
