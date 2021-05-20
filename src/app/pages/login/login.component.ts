import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { Router } from '@angular/router';
import { MiservicioService } from '../../servicios/miservicio.service';
import { AuthService } from '../../servicios/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = new Usuario();
  registro = false;

  constructor(private route: Router,
              private miservicio: MiservicioService,
              private authService: AuthService,
              private db: AngularFirestore) { }

  ngOnInit() {
    this.usuario.email = 'admin@mail.com';
    this.usuario.pass = '123456';
  }

  Ingresar() {
    console.log(this.usuario);

    this.authService.signIn(this.usuario).then(res => {
      console.log('Login exitoso', res);
      this.authService.isLoggedIn = true;

      this.db.collection('pruebas').add({
          email: this.usuario.email,
          fechaacceso: firestore.Timestamp.fromDate(new Date()),
          dato: 'dato de prueba'
      })
      .then(docRef => {
        localStorage.setItem('usuario', JSON.stringify(this.usuario));
        this.miservicio.usuario = this.usuario;
        this.route.navigate(['home']);
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(error => {
          console.error('Error adding document: ', error);
      });
    }).catch(error => {
      console.log('Login error: ', error);
      this.route.navigate(['error']);
    });

  }

  Registrar() {
    console.log(this.usuario);
    this.authService.register(this.usuario).then(res => {
      console.log('Registro exitoso', res);
      this.authService.isLoggedIn = true;
      this.db.collection('usuarios').add({
          email: this.usuario.email,
          nombre: this.usuario.nombre
      })
      .then(docRef => {
        localStorage.setItem('usuario', JSON.stringify(this.usuario));
        this.miservicio.usuario = this.usuario;
        this.route.navigate(['home']);
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(error => {
          console.error('Error adding document: ', error);
      });
    }).catch(error => {
      console.log('Registro error: ', error);
      this.route.navigate(['error']);
    });
  }

}
