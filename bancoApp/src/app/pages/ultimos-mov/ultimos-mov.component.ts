import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ultimos-mov',
  templateUrl: './ultimos-mov.component.html',
  styleUrls: ['./ultimos-mov.component.css']
})



export class UltimosMovComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }


  pdf() {
    console.log('descargando pdf');
  }

}


