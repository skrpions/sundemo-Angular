import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Usuario } from '../Modelo/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  // Está Url hace referencia al proyecto Backend
  Url = 'http://localhost:8081/usuarios';

  // Métodos que usaré para traer los datos
  getUsuarios(){
    return this.http.get<Usuario[]>(this.Url) // Con esta linea obtengo todos los datos de la Url que viene del Backend
  }
}
