import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/interface/interface';
import { BancoService } from '../../services/banco.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})

export class PrincipalComponent implements OnInit {

  usuario!:  Usuario;
  Swal: any;


  constructor( private bancoService: BancoService,) {}

  ngOnInit(): void {
    // // leer el localStorage
    // const accountString = localStorage.getItem("user");
    // const user = JSON.parse(accountString!);

  }





    //Grafica
    public barChartType: ChartType = 'bar';
    public barChartData: ChartData<'bar'> = {
      labels: [ 'lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo' ],
      datasets: [
        { data: [  ], label: 'Egresos', backgroundColor: 'rgb(188, 45, 45)' },
        { data: [  ], label: 'Ingresos',backgroundColor: 'rgb(41, 133, 239)'}
      ]
    };

}
