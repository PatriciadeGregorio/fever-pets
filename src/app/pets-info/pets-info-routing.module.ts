import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { PetResolver } from './resolvers/pet.resolver';

const routes: Routes = [
  { path: 'home', component: HomeComponent, resolve: {pets: PetResolver}},
  { path: 'details/:id', component: DetailsComponent},
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetsInfoRoutingModule { }
