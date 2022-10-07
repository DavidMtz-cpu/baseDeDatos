import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';



const routes: Routes = [
  {
    path:'login',
    loadChildren: () => import('./login/login.module').then( m =>m.LoginModule ) 
  },
  {
    path:'',
    loadChildren: () => import('../app/pages/menu.module').then( m =>m.MenuModule ),
    canLoad: [AuthGuard],
    canActivate: [ AuthGuard ]
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'login'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
