import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Usuario } from '../Modelo/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  // Está Url hace referencia al proyecto Backend
  Url = 'http://localhost:8081';

  // Método que usaré para traer los datos
  getUsuarios(){
    return this.http.get<Usuario[]>(this.Url) // Con esta linea obtengo todos los datos de la Url que viene del Backend
  }

  // Método para crear un Nuevo Usuario
  createUsuario(usuario:Usuario){
    return this.http.post<Usuario>(this.Url+"/add",usuario);
  }

  // Método para capturar la fila seleccionada y mostrar en el formulario
  getUsuarioId(id:number){
    return this.http.get<Usuario>(this.Url+"/"+id);
  }

  // Método para editar un Usuario 
  updateUsuario(usuario:Usuario){
    return this.http.put<Usuario>(this.Url+"/edit/"+usuario.id,usuario);
  } 

  // Método para eliminar un Usuario
  deleteUsuario(usuario:Usuario){
    return this.http.delete<Usuario>(this.Url+"/delete/"+usuario.id)
  }
}
