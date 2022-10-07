import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  filter, map, Observable} from 'rxjs';
import { Usuario } from '../interface/interface';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  constructor( private http: HttpClient, ) {}

  users(user:Usuario): Observable<Usuario>{
    return this.http.get<Usuario[]>(`http://localhost:3000/usuarios`).
    pipe(
      map( (users:Usuario[] ) => users.forEach(user => console.log(user))!)
    );
  };


  login( email: string , password: string ): Observable<Usuario> {

    return this.http.get<Usuario[]>(`http://localhost:3000/usuarios?email=${email}&password=${password}`)
      .pipe(
        map( (users:Usuario[] ) => users.find( u => !u.email === !email && u.password === password)!)
      );
  };


};
