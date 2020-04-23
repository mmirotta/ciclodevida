import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { MiservicioService } from '../../servicios/miservicio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menu = 0;
  title = 'Home';
  usuario = new Usuario();
  listadoPrincipal: Usuario[];
  usuarioSeleccionado: Usuario;

  constructor(private miservicio: MiservicioService) {
    this.listadoPrincipal = [
      { email: 'admin@mail.com' , pass: '1234', id: 1, perfil: 'admin' },
      { email: 'usuario@mail.com' , pass: 'rogelio', id: 3, perfil: 'usuario' },
    ];
   }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));

    this.miservicio.obtenerPaises().subscribe(resultado => {
      console.log('console log dentro del observable');
      console.log(resultado);
    }, error => {
      console.log('Error');
    });

    console.log('console log despues del observable');
  }

  tomarUsuarioCreado(nuevoUsuario: Usuario) {
    this.listadoPrincipal.push(nuevoUsuario);
  }

  tomarUsuarioParaDetalles(nuevoUsuario: Usuario) {
    this.usuarioSeleccionado = nuevoUsuario;
  }

  Acceder(opcion) {
    this.menu = opcion;
    this.title = opcion === 1 ? 'Paises' : 'Administrador';
  }

}
