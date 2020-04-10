import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario = new Usuario();
  listadoPrincipal: Usuario[];
  usuarioSeleccionado: Usuario;

  constructor() {
    this.listadoPrincipal = [
      { email: 'admin@mail.com' , pass: '1234', id: 1, perfil: 'admin' },
      { email: 'usuario@mail.com' , pass: 'rogelio', id: 3, perfil: 'usuario' },
    ];
   }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
  }

  tomarUsuarioCreado(nuevoUsuario: Usuario) {
    this.listadoPrincipal.push(nuevoUsuario);
  }

  tomarUsuarioParaDetalles(nuevoUsuario: Usuario) {
    this.usuarioSeleccionado = nuevoUsuario;
  }
}
