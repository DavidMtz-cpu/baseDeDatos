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
   
  };





}
