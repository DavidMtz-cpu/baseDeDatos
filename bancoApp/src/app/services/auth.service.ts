import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map, Observable, of,tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interface/interface';
import { environmentAuth } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = environmentAuth.baseUrl;
  private _auth: Usuario | undefined;

  get auth(): Usuario {
    return { ...this._auth! }
  };
  constructor( private http: HttpClient ) {};

  verificaAutenticacion(): Observable<boolean> {
    if ( !sessionStorage.getItem('email') ) {
      return of(false);
    }
    return this.http.get<Usuario>(`${ this.baseUrl }/usuarios/1`)
      .pipe(
        map( auth => {
          this._auth = auth;
          return true;
        })
      );
  };
  verificar(id:number,password:string){
    if( id && password ){
      console.log('existe en la bd');
    }else if( !id && !password ){
      console.log('no existe en la bd');
    }
  };

  login(id:number, password:string): Observable<Usuario>{
    return this.http.get<Usuario>(`${ this.baseUrl }/usuarios/${id}`)
      .pipe(
        tap( auth =>{
          this._auth = auth;
        }),
        tap( user => {
          sessionStorage.setItem('email', user.email )
          this.verificar(id,password);
        }),
        tap( userAll => {
          if(!userAll.email){
            
          }
        } )
      );

    // llamar a toda la base de datos
    // del arreglo de todos los usuarios, lo recorro y busco el usuario que coincida con el email
    // si lo encuentro entonces verifico que sea la contraseña correcta, si no lanzo un error
    // si no encuentro  el usuario lanzo error
    // si todo sale bien, regreso el usuario
  }

  logout() {
    this._auth = undefined;
  }
}
