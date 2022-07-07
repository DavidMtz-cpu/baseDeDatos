import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { WebsocketService } from 'src/app/services/websocket.service';
import Swal from 'sweetalert2';
import { BancoService } from '../../services/banco.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private bancoService: BancoService ) {}

  //Menu
  items!: MenuItem[];
  activeItem!: MenuItem;
  Swal: any;


  ngOnInit() {
    Swal.fire({
      title: 'Bienvenido',
      text: 'Bienvenido al banco mas seguro',
      icon: 'success',
      confirmButtonText: 'Okey'
    });

      this.items = [
          {label: 'Principal', routerLink:'./principal', icon: 'pi pi-fw pi-home'},
          {label: 'Transferencias', routerLink:'./transferencias', icon: 'pi pi-eject'},
          {label: 'Retirar', routerLink:'./retiros', icon: 'pi pi-money-bill'},
          {label: 'Ultimos-Mov', routerLink:'./ultimos-mov', icon: 'pi pi-question-circle'}
      ];

      this.activeItem = this.items[0];
  }

  confirmar() {
    Swal.fire({
      title: '¿Quiere salir?',
      text: "!Si quiere salir de en confirmar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '<a href="./login">Confirmar</a>'
    })
  }
}
