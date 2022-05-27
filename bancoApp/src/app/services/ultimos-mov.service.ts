import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class UltimosMovService {

  constructor( private http: HttpClient ) { }

  // public  UltimosMov( id:number ): Observable<Usuario> {
  // //   return this.http.get<Usuario[]>(`http://localhost:3000/usuarios?id=${id}`) [
  // //     {
  // //       mov: "retiro",
  // //       cantidad: 20,000
  // //     }
  // //   ]
  // // };
}
