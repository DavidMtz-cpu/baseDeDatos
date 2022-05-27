import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BancoService } from '../../services/banco.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transferencias',
  templateUrl: './transferencias.component.html',
  styleUrls: ['./transferencias.component.css']
})
export class TransferenciasComponent implements OnInit {

  constructor(  private fb: FormBuilder,
                private bancoService: BancoService ) { }

  ngOnInit(): void {};

  miFormulario: FormGroup = this.fb.group({
    numTarjeta  : [  , [ Validators.required, Validators.minLength(19)] ],
    cantidad    : [  , [ Validators.required, Validators.minLength(0) ] ]
  });

  campoValido( campo: string ) {
    return this.miFormulario.controls[campo].errors 
      && this.miFormulario.controls[campo].touched;
  };

  trans() {
    const { numTarjeta, cantidad } = this.miFormulario.value;
    this.bancoService.getUserByNumTarjetas(numTarjeta),
    this.bancoService.getUserByBalance(cantidad)
      .subscribe(
        {
          next: user => {
            user = numTarjeta;
            //Validacion campos vacios
            if( !numTarjeta || !cantidad ) {
              Swal.fire({
                title: 'Error!',
                text: 'Num de Tarjeta No Existe o No Cuenta con los Fondos',
                icon: 'error',
                confirmButtonText: 'Okey'
              })
            }
            
            // Validaciones Tarjeta
            if ( !numTarjeta === !this.bancoService.getUserByNumTarjetas(numTarjeta) ) {
              console.log('numero de tarjeta iguales')
            }else {
              console.log('num tarjeta no iguales')
            }
            console.log(numTarjeta,cantidad);

            //Validaciones fondos

            if ( this.bancoService.getUserByBalance < cantidad ) {
              console.log('no cuenta con esa cantidad')
            }else {
              console.log('cuenta con el saldo disponible')
            }

          }
        }
      )
  };





}
