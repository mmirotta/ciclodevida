import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../../clases/usuario';

@Component({
  selector: 'app-editor-usuario',
  templateUrl: './editor-usuario.component.html',
  styleUrls: ['./editor-usuario.component.css']
})
export class EditorUsuarioComponent implements OnInit {

  @Output() usuarioCreado: EventEmitter<any> = new EventEmitter<any>();

  usuario: Usuario = new Usuario();

  constructor() {
  }

  ngOnInit() {
  }

  NuevoUsuario() {
    const id: number = Math.floor((Math.random() * 1) + 1);
    this.usuario = new Usuario();
    this.usuario.id = id;

  }

  CrearUsuario() {
    this.usuarioCreado.emit(this.usuario);
    this.usuario = null;
  }

}
