import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../../clases/usuario';

@Component({
  selector: 'app-grilla-usuarios',
  templateUrl: './grilla-usuarios.component.html',
  styleUrls: ['./grilla-usuarios.component.css']
})
export class GrillaUsuariosComponent implements OnInit {

  @Input() listadoUsuarios: Usuario[] ;
  @Output() usuarioSeleccionado: EventEmitter<any> = new EventEmitter<any>();

  displayedColumns: string[] = ['id', 'email'];
  dataSource = this.listadoUsuarios;

  constructor() {
  }

  ngOnInit() {
  }

  mostrarDetalles(usuario: Usuario) {
     this.usuarioSeleccionado.emit(usuario);
  }

}
