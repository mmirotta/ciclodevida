import { Component, OnInit } from '@angular/core';
import { MiservicioService } from '../../servicios/miservicio.service';
import { Pais } from '../../clases/pais';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  listadoPaises = [];
  paisseleccionado: Pais;

  constructor(private miservicio: MiservicioService) { }

  ngOnInit(): void {
    this.miservicio.obtenerPaises().subscribe((paises: any) => {
      this.listadoPaises = paises;
    }, error => {
      console.log('Error');
    });
  }

  paisSeleccionado(pais) {
    console.log(pais);
    this.paisseleccionado = pais;
  }
}
