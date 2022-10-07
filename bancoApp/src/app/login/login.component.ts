import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BancoService } from '../services/banco.service';
import { map } from 'rxjs';
import { Usuario } from '../interface/interface';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',]
})
export class LoginComponent implements OnInit {
  Swal: any;

  constructor( private fb: FormBuilder,
               private bancoService: BancoService,
               private authService: AuthService,
               private router: Router ) {}

  ngOnInit(): void {
  };

  campoValido( campo: string ) {
    return this.miFormulario.controls[campo].errors
    && this.miFormulario.controls[campo].touched;

  };

  miFormulario: FormGroup = this.fb.group({
    email   : [  , [ Validators.required, Validators.maxLength(25), Validators.minLength(1)]],
    password: [  , [ Validators.required, Validators.minLength(8) , Validators.minLength(1)]]
  });

  guardar() {

    // Ir al backend
    // un usuario
    this.authService.login(2,'F6iuBw1Ehx')
      .subscribe( resp => {
        // if ( resp.email ) {
          //this.router.navigate(['./principal']);
        // }
        console.log(resp);
      })
  }
  logout() {
    this.router.navigate(['./login']);
  }
}


