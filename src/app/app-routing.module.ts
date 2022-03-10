import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunesListeComponent } from './communes-liste/communes-liste.component';
import { DepartementsListeComponent } from './departements-liste/departements-liste.component';
import { RegionsListeComponent } from './regions-liste/regions-liste.component';

const routes: Routes = [
  { path: '', component: RegionsListeComponent},
  { path: 'regions/:idRegion/departments', component: DepartementsListeComponent},
  { path: 'regions/:idRegion/departments/:idDepartement/cities', component: CommunesListeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
