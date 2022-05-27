import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


//PrimeNg
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';



const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'**',
    redirectTo: ''
  }

];

@NgModule({ 
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LoginRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
