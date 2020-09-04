import { Component, OnInit } from '@angular/core';
import { MiservicioService } from '../../servicios/miservicio.service';

@Component({
  selector: 'app-grilla-paises',
  templateUrl: './grilla-paises.component.html',
  styleUrls: ['./grilla-paises.component.css']
})
export class GrillaPaisesComponent implements OnInit {

  listadoPaises = [];
  constructor(private miservicio: MiservicioService) { }

  ngOnInit() {
    this.miservicio.obtenerPaises().subscribe((paises: any) => {
      console.log(paises);
      console.log('console log dentro del observable');
      this.listadoPaises = paises;
    }, error => {
      console.log('Error');
    });
    console.log('console log despues del observable');
  }

}
