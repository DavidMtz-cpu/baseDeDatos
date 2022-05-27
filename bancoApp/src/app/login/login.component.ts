import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BancoService } from '../services/banco.service';
import   Swal from 'sweetalert2'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 
  Swal: any;

  constructor( private fb: FormBuilder,
               private bancoService: BancoService) {}

  ngOnInit(): void {
  };
  
  campoValido( campo: string ) {
    return this.miFormulario.controls[campo].errors 
    && this.miFormulario.controls[campo].touched;
  };

  miFormulario: FormGroup = this.fb.group({
    id      : [  , [ Validators.required, Validators.maxLength(10), Validators.minLength(1)]],
    password: [  , [ Validators.required, Validators.minLength(8) , Validators.minLength(1)]]
  });
    
  guardar() {
    const { id } = this.miFormulario.value;
    const { password } = this.miFormulario.value
    this.bancoService.signIn(id,password) 
      .subscribe(
        {
          next: user => {
            user = id;
            if( !id === !this.bancoService.getUserById(id) && !password === !this.bancoService.getUserByPassword(password) ) {
              setTimeout(() => {
                Swal.fire({
                  title: 'Todo Paso Correctamente',
                  text: 'Todo Correcto',
                  icon: 'success',
                  confirmButtonText:'<a href="./principal">Okey</a>'
                })
              }, 2000);
            }
              //Validacion si existen
            if( !id && !password ) {
              Swal.fire({
                title: 'Error!',
                text: 'Id o Contaseña Incorrecta',
                icon: 'error',
                confirmButtonText: 'Okey'
              })
            };
          }
        }
    );
    
  };

}


