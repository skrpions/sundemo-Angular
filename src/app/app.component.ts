import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sundemo';

  // Creo un constructor vacío
  constructor(private router:Router){}

  //Creo el metodo que tiene el botón
  Listar(){
    this.router.navigate(["listar"]) // listar es el nombre que el dí en el enrutamiento de app-routing.module.ts en la linea 9
  }

  Nuevo(){
    this.router.navigate(["add"]) 
  }
}
