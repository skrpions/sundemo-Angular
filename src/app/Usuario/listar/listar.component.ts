import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../../Service/service.service';
import {Usuario} from 'src/app/Modelo/Usuario';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  // Iconos de Font-awesome
  faPencilAlt = faPencilAlt;
  faTrashAlt = faTrashAlt;

  usuarios:Usuario[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(){
    this.service.getUsuarios()
    .subscribe(data=>{
      this.usuarios=data;
    });
  }

  // Método Editar
  Editar(usuario:Usuario){
    localStorage.setItem("id",usuario.id.toString()); // Envío el id de la fila seleccionada
    this.router.navigate(["edit"]); // Redirecciono al formulario
  }

  // Método Eliminar
  Delete(usuario:Usuario){
    this.service.deleteUsuario(usuario)
    .subscribe(data=>{
      this.usuarios=this.usuarios.filter(u=>u!==usuario);
      alert("Usuario Eliminado!");
    })
  }
}
