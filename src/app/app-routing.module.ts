import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pets-info',
    loadChildren: () => import('./pets-info/pets-info.module').then(m => m.PetsInfoModule)
  },
  {
    path: '',
    redirectTo: '/pets-info',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
