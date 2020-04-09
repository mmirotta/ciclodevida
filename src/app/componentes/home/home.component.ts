import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario = new Usuario();
  lista = [{name: 'Matias', perfil: 1}, {name: 'Octavio', perfil: 2}, {name: 'Mario', perfil: 3}];

  constructor() { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
  }

  OcultarMostrar() {
    //this.expression = !this.expression;
  }

}
