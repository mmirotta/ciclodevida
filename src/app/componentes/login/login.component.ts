import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = new Usuario();

  constructor(private route: Router) { }

  ngOnInit() {
    this.usuario.email = 'admin@mail.com';
    this.usuario.pass = '1234';
  }

  Ingresar() {
    console.log(this.usuario);

    if (this.usuario.email === 'admin@mail.com' && this.usuario.pass === '1234') {
      // tiene que llevar a home
      this.usuario.perfil = 'Admin';
      localStorage.setItem('usuario', JSON.stringify(this.usuario));
      this.route.navigate(['home']);
    } else {
      // tiene que llevar a Error
      this.route.navigate(['error']);
    }

  }

}
