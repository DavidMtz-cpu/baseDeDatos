import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
// @ts-ignore
import { jsPDF } from 'jspdf';


@Component({
  selector: 'app-ultimos-mov',
  templateUrl: './ultimos-mov.component.html',
  styleUrls: ['./ultimos-mov.component.css']
})



export class UltimosMovComponent implements OnInit {
   @ViewChild('pdf', {static:true}) el!: ElementRef;


  constructor() {}

  ngOnInit(): void {
  }

  createPdf() {
    const doc = new jsPDF('p','pt','a4');
    doc.html(this.el.nativeElement,{
      callback:(pdf: { save: (arg0: string) => void; }) =>{
        pdf.save("Ultimos Movimientos");
      }
    });
  };

}


