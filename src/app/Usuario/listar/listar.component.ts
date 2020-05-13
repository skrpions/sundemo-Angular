import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../../Service/service.service';
import {Usuario} from 'src/app/Modelo/Usuario';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  usuarios:Usuario[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(){
    this.service.getUsuarios()
    .subscribe(data=>{
      this.usuarios=data;
    });
  }

  Editar(usuario:Usuario){
    localStorage.setItem("id",usuario.id.toString()); // Envío el id de la fila seleccionada
    this.router.navigate(["edit"]); // Redirecciono al formulario
  }
}
