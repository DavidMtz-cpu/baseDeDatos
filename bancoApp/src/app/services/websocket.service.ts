import { Injectable, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService{

  constructor(  ) { }

  console2() {
    console.log('hola desde webSocket')
  }

}
