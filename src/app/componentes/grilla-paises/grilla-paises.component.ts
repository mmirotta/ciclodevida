import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MiservicioService } from '../../servicios/miservicio.service';

@Component({
  selector: 'app-grilla-paises',
  templateUrl: './grilla-paises.component.html',
  styleUrls: ['./grilla-paises.component.css']
})
export class GrillaPaisesComponent implements OnInit {

  @Input() listadoPaises = [];
  @Output() emitirverpais: EventEmitter<any> = new EventEmitter();

  constructor(private miservicio: MiservicioService) { }

  ngOnInit() {

  }
  
  VerPais(pais) {
    this.emitirverpais.emit(pais);
  }
}