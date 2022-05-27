import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interface/interface';
import { BancoService } from '../../services/banco.service';

@Component({
  selector: 'app-retiros',
  templateUrl: './retiros.component.html',
  styleUrls: ['./retiros.component.css']
})
export class RetirosComponent implements OnInit {

  usuario?: Usuario;

  constructor( private bancoService: BancoService ) { }

  ngOnInit(): void {
  }

}
