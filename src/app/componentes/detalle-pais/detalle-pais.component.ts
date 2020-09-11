import { Component, OnInit, Input } from '@angular/core';
import { Pais } from '../../clases/pais';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {

  @Input() pais: Pais = new Pais();

  constructor() {
  }

  ngOnInit() {
  }

}
