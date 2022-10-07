import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrincipalComponent } from './principal/principal.component';
import { RetirosComponent } from './retiros/retiros.component';
import { TransferenciasComponent } from './transferencias/transferencias.component';
import { UltimosMovComponent } from './ultimos-mov/ultimos-mov.component';

const routes: Routes = [
  { 
    path: 'home/principal',
    component: PrincipalComponent,
    children:[
      { path: 'transferencias', component: TransferenciasComponent },
      { path: 'retiros', component: RetirosComponent },
      { path: 'ultimos-mov', component: UltimosMovComponent }
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
