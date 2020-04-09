import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  perfil = 'Admin';
  lista = [{name: 'Matias', perfil: 1}, {name: 'Octavio', perfil: 2}, {name: 'Mario', perfil: 3}];

  constructor() { }

  ngOnInit() {
  }

  OcultarMostrar() {
    //this.expression = !this.expression;
  }

}
