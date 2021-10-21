import { StorageService } from './../../servicios/storage.service';
import { UsuariosService } from './../../servicios/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { MiservicioService } from '../../servicios/miservicio.service';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { Pais } from '../../clases/pais';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menu = 0;
  title = 'Home';
  usuario = new Usuario();
  listadoUsuarios = [];
  usuarioSeleccionado: Usuario;
  listadoPaises = [];
  paisseleccionado: Pais;
  color;
  condicion = false;

  constructor(private miservicio: MiservicioService,
              private authService: AuthService,
              private route: Router,
              private usuarioService: UsuariosService,
              private storageService: StorageService) {}

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    console.log(this.miservicio.usuario);
    this.obtenerUsuarios();

    this.miservicio.obtenerPaises().subscribe((paises: any) => {
      console.log(paises);
      console.log('console log dentro del observable');
      this.listadoPaises = paises;
    }, error => {
      console.log('Error');
    });
  }

  obtenerUsuarios() {
    this.usuarioService.obtenerUsuarios().subscribe(
      data => this.listadoUsuarios = data
    );
  }

  async tomarUsuarioCreado(nuevoUsuario: Usuario) {
    try {
      // Subir archivo
      const tarea = await this.storageService.tareaCloudStorage(nuevoUsuario.id.toString(), nuevoUsuario.foto);
      nuevoUsuario.foto = await tarea.ref.getDownloadURL();
  
      // Registrar usuario
      await this.authService.register(nuevoUsuario);
      await this.usuarioService.crearUsuario(nuevoUsuario);

    } catch(error) {
      console.log("Se produjo un error: ", error);
    }
  }

  tomarUsuarioParaDetalles(nuevoUsuario: Usuario) {
    this.usuarioSeleccionado = nuevoUsuario;
  }

  Acceder(opcion) {
    this.menu = opcion;
    this.title = opcion === 1 ? 'Paises' : opcion === 2 ? 'Administrador' : 'Directivas';
  }

  Salir() {
    this.authService.signOut().then(res => {
      console.log('Logout exitoso', res);
      this.authService.isLoggedIn = false;
      localStorage.removeItem('usuario');
      this.route.navigate(['login']);
    }).catch(error => {
      console.log('Login error: ', error);
      this.route.navigate(['error']);
    });
  }

  paisSeleccionado(pais) {
    console.log(pais);
    this.paisseleccionado = pais;
  }

}
