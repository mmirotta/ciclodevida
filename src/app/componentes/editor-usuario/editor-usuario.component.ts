import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FileInputComponent } from 'ngx-material-file-input';
import { Usuario } from '../../clases/usuario';

@Component({
  selector: 'app-editor-usuario',
  templateUrl: './editor-usuario.component.html',
  styleUrls: ['./editor-usuario.component.css']
})
export class EditorUsuarioComponent implements OnInit {
  @ViewChild('inputFile') inputFile: FileInputComponent;

  @Output() usuarioCreado: EventEmitter<any> = new EventEmitter<any>();

  usuario: Usuario = new Usuario();

  constructor() {
  }

  ngOnInit() {
  }

  CrearUsuario() {
    const id: number = this.GenerarId(1, 1000);
    console.log({id});
    this.usuario.id = id;
    this.usuarioCreado.emit(this.usuario);

    // Limpio formulario
    this.usuario = new Usuario();
    this.inputFile.clear();
  }

  CambioArchivo(event) {
    this.usuario.foto = event.target.files[0];
  }

  GenerarId(min, max){
    return Math.round(Math.random() * (max - min) + min);
  }

}
