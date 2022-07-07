import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable} from 'rxjs';
import   Swal from 'sweetalert2';
import { Usuario } from '../interface/interface';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  constructor( private http: HttpClient, ) {}


  signIn( id: number , password: string ): Observable<Usuario> {
    sessionStorage.setItem('id', id.toString(id) )
    console.log(sessionStorage)
    console.log(id,password)
    if( !id && !password) {
      Swal.fire({
        title: 'Error!',
        text: 'Id o Contaseña Incorrecta',
        icon: 'error',
        confirmButtonText: 'Okey'
      })
    }
    return this.http.get<Usuario[]>(`http://localhost:3000/usuarios?id=${id}&password=${password}`)
      .pipe(
        map( users => users.find( u => u.id === id && u.password === password)!),);
  };

  logout( id:number ): Observable<Usuario> {
    sessionStorage.removeItem('id' )
    return this.http.get<Usuario[]>(`http://localhost:3000/usuarios`)
      .pipe(
        map( users => users.find( u => u.id === id)!)
      );
  }

  getUserById( id: number ): Observable<Usuario> {
    return this.http.get<Usuario[]>(`http://localhost:3000/usuarios?id=1`) 
      .pipe(
        map( user => user.find( u => u.id === id)!),
      );
  };

  getUserByPassword( password: string ): Observable<Usuario> {
    return this.http.get<Usuario[]>('http://localhost:3000/usuarios')
      .pipe(
        map( user => user.find( u => u.password === password )!)
      );
  };

  getUserByNumTarjetas( numTarjeta: number ) : Observable<Usuario> {
    return this.http.get<Usuario[]>('http://localhost:3000/usuarios')
      .pipe(
        map( users => users.find( u => u.numTarjeta === numTarjeta , console.log(users) )!)
      );
  };
 
  getUserByBalance( saldoDisoinible: string ): Observable<Usuario> {
    return this.http.get<Usuario[]>(`http://localhost:3000/usuarios`)
      .pipe(
        map( users => users.find(  u =>  u.saldoDisponible === saldoDisoinible  )!)
      );
  };

};