import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { MiservicioService } from '../../servicios/miservicio.service';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
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
  listadoPrincipal: Usuario[];
  listadoUsuarios: Usuario[] = [];
  usuarioSeleccionado: Usuario;

  color;
  condicion = false;

  constructor(private miservicio: MiservicioService,
              private authService: AuthService,
              private route: Router,
              private db: AngularFirestore) {
    this.listadoPrincipal = [
      { email: 'admin@mail.com' , pass: '1234', id: 1, perfil: 'admin', nombre: 'admin' },
      { email: 'usuario@mail.com' , pass: 'rogelio', id: 3, perfil: 'usuario', nombre: 'usuario' },
    ];
   }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.obtenerUsuario();

  }

  tomarUsuarioCreado(nuevoUsuario: Usuario) {
    this.listadoPrincipal.push(nuevoUsuario);
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
      localStorage.setItem('usuario', JSON.stringify(this.usuario));
      this.miservicio.usuario = this.usuario;
      this.route.navigate(['login']);
    }).catch(error => {
      console.log('Login error: ', error);
      this.route.navigate(['error']);
    });
  }

  private obtenerUsuario() {
    // Obtengo solo los datos una vez cuando carga el componente
    this.db.collection('usuarios').get().subscribe((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          this.listadoUsuarios.push( doc.data() as Usuario);
      });
      console.log('Listado usuarios firebase: ', this.listadoUsuarios);
    });

    // Obtengo solo los datos una vez cuando carga el componente de forma diferente
    const coleccionlogueos = this.db.collection('logusuarios').valueChanges();
    coleccionlogueos.subscribe(lista => {
      console.log('Listado logs: ', lista);
    });
  }


}
