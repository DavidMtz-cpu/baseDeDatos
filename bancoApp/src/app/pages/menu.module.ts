import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';




import { NgChartsModule } from 'ng2-charts';


import { MenuRoutingModule } from './menu-routing.module';

//PrimeNg
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { HomeComponent } from './home/home.component';
import { TransferenciasComponent } from './transferencias/transferencias.component';
import { UltimosMovComponent } from './ultimos-mov/ultimos-mov.component';
import { PrincipalComponent } from './principal/principal.component';
import { RetirosComponent } from './retiros/retiros.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { 
    path: '',
    component: HomeComponent,
    children:[
      { path: 'principal', component: PrincipalComponent },
      { path: 'transferencias', component: TransferenciasComponent },
      { path: 'retiros', component: RetirosComponent },
      { path: 'ultimos-mov', component: UltimosMovComponent }
    ]
  },
  {
    path:'**',
    redirectTo: ''
  }

];
@NgModule({
  declarations: [
    HomeComponent,
    TransferenciasComponent,
    UltimosMovComponent,
    PrincipalComponent,
    RetirosComponent
  ],
  imports: [
    MenuRoutingModule,
    RouterModule.forChild(routes),
    NgChartsModule,
    CommonModule,
    PrimeNgModule,
    ReactiveFormsModule
  ],
  providers: [
  ]
  
})
export class MenuModule { }
