import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../../clases/usuario';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {
  @Input() usuarioParaMostrar: Usuario;
  constructor() { }

  ngOnInit() {
  }

}
